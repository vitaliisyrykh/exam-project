const { promisify } = require('util');
const createHttpError = require('http-errors');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const { User } = require('../models');
const CONSTANTS = require('./../../constants');

const signJWT = promisify(jwt.sign);

module.exports.signUp = async (req, res, next) => {
  /* 
{
  tokenPair: {
    access: 'sfgbgdnlmdglkbndklb.sdg.sfg',
    refresh: 'esrgrs.srfg.srgr'
  }
}
*/
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
      const accessToken = await signJWT(
        {
          userId: user.id,
          role: user.role,
          email: user.email,
        },
        CONSTANTS.ACCESS_TOKEN_SECRET,
        {
          expiresIn: CONSTANTS.ACCESS_TOKEN_TIME,
        }
      );

      const refreshToken = await signJWT(
        {
          userId: user.id,
          role: user.role,
          email: user.email,
        },
        CONSTANTS.REFRESH_TOKEN_SECRET,
        {
          expiresIn: CONSTANTS.REFRESH_TOKEN_TIME,
        }
      );

      if ((await user.countRefreshTokens()) <= CONSTANTS.MAX_DEVICES_AMOUNT) {
        await user.createRefreshToken({ value: refreshToken });
      } else {
        const [oldRefreshToken] = await user.getRefreshTokens({
          order: [['updatedAt', 'ASC']],
        });
        await oldRefreshToken.update({
          value: refreshToken,
        });
      }

      /* prepare user */

      const preparedUser = _.omit(user.get(), ['password']);

      /* Send user and tokenPair */
      return res.send({
        data: {
          user: preparedUser,
          tokenPair: {
            refresh: refreshToken,
            access: accessToken,
          },
        },
      });
    }
    next(createHttpError(401, 'Invalid credentials'));
  } catch (error) {
    next(error);
  }
};

module.exports.refreshToken = async (req, res, next) => {
  /* 
{
  tokenPair: {
    access: 'sfgbgdnlmdglkbndklb.sdg.sfg',
    refresh: 'esrgrs.srfg.srgr'
  }
}
*/
};
