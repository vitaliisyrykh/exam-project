const { User } = require('../models');
const createHttpError = require('http-errors');

module.exports.signIn = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    /* Find user */
    const user = await User.findOne({
      where: { email },
    });
    /* Compare password */
    if (user && (await user.comparePassword(password))) {

      /* Create tokenPair */

      /* Send user with tokens */
    }
    next(createHttpError(401, 'Invalid credentials'));
  } catch (error) {
    next(error);
  }
};

module.exports.signUp = async (req, res, next) => {
  try {
    const {body} = req
    const user = await User.create(body)
  } catch (error) {
    next(error);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
