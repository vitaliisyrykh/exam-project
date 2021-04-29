const JwtService = require('../services/jwtService');
const TokenError = require('../errors/TokenError');

const checkAccessToken = async (req, res, next) => {
  try {
    const {
      headers: { authorization }, // 'Bearer slkfvhnrd.dfgrftnklh.srgfvujrfh'
    } = req;
    console.log(req.headers);

    const [, token] = authorization.split(' ');
    console.log(token);

    req.tokenData = await JwtService.verifyAccessToken(token);
    console.log(req.tokenData);
    next();
  } catch (error) {
    next(new TokenError(error));
  }
};

const checkARefreshToken = async (req, res, next) => {
  try {
    const {
      body: { refreshToken }, // 'Bearer slkfvhnrd.dfgrftnklh.srgfvujrfh'
    } = req;
    console.log(refreshToken);

    req.tokenData = await JwtService.verifyRefreshToken(refreshToken);
    console.log(req.tokenData);
    next();
  } catch (error) {
    next(new TokenError(error));
  }
};

module.exports.checkRefreshToken = checkARefreshToken;
module.exports.checkAccessToken = checkAccessToken;
