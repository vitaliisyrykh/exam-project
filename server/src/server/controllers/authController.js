const { User } = require('../models');

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

    /* user.comparePassword(password) */
    /* Compare passwords */

    /* Create token pair */

    /* Send user and tokenPair */

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
