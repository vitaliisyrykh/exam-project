const createHttpError = require('http-errors');
const _ = require('lodash');
const { User, RefreshToken } = require('../models');
const JWTService = require('../services/jwtService');
const CONSTANTS = require('./../../constants');

module.exports.signUp = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    if (user) {
      /* Create token pair */
      const tokenPair = await JWTService.createTokenPair({
        id: user.id,
        email: user.email,
        role: user.role,
      });
      await user.createRefreshToken({ value: tokenPair.refreshToken });
      /* prepare user */
      const preparedUser = _.omit(user.get(), ['password']);
      /* Send user and tokenPair */
      return res.send({
        data: {
          user: preparedUser,
          tokenPair,
        },
      });
    }
    next(createHttpError(400, 'Unable to create user with provided data'));
  } catch (error) {
    next(err);
  }
};

module.exports.signIn = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    const user = await User.findOne({
      where: { email },
    });
    /* Compare passwords */
    if (user && (await user.comparePassword(password))) {
      /* Create token pair */
      const tokenPair = await JWTService.createTokenPair({
        id: user.id,
        email: user.email,
        role: user.role,
      });
      if ((await user.countRefreshTokens()) <= CONSTANTS.MAX_DEVICES_AMOUNT) {
        await user.createRefreshToken({ value: tokenPair.refreshToken });
      } else {
        const [oldRefreshToken] = await user.getRefreshTokens({
          order: [['updatedAt', 'ASC']],
        });
        await oldRefreshToken.update({
          value: tokenPair.refreshToken,
        });
      }
      /* prepare user */
      const preparedUser = _.omit(user.get(), ['password']);
      /* Send user and tokenPair */
      return res.send({
        data: {
          user: preparedUser,
          tokenPair,
        },
      });
    }
    next(createHttpError(401, 'Invalid credentials'));
  } catch (error) {
    next(error);
  }
};

module.exports.refreshToken = async (req, res, next) => {
  try {
    const {
      body: { refreshToken },
    } = req; // refresh not expired

    const refreshTokenInstance = await RefreshToken.findOne({
      where: { value: refreshToken },
    });

    const user = await refreshTokenInstance.getUser();
    if (user) {
      /* Create token pair */
      const tokenPair = await JWTService.createTokenPair({
        id: user.id,
        email: user.email,
        role: user.role,
      });
      await refreshTokenInstance.update({
        value: tokenPair.refreshToken,
      });
      /* prepare user */
      const preparedUser = _.omit(user.get(), ['password']);
      /* Send user and tokenPair */
      return res.send({
        data: {
          user: preparedUser,
          tokenPair,
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
