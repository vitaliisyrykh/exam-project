const JwtService = require('../services/jwtService');
const TokenError = require('../errors/TokenError');

const checkToken = checkFunction => {
  return async (req, res, next) => {
    try {
      const {
        headers: { authorization }, // 'Bearer slkfvhnrd.dfgrftnklh.srgfvujrfh'
      } = req;

      const [, token] = authorization.split(' ');
      req.tokenData = await checkFunction(token);
      next();
    } catch (error) {
      next(new TokenError(error));
    }
  };
};

module.exports.checkRefreshToken = checkToken(JwtService.verifyRefreshToken);
module.exports.checkAccessToken = checkToken(JwtService.verifyAccessToken);
