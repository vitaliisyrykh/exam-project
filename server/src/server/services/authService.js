const JwtService = require('./jwtService');
const UserService = require('./userService');
const CONSTANTS = require('../../constants');

module.exports.createSession = async user => {
  const tokenPair = await JwtService.createTokenPair({
    userId: user.id,
    email: user.email,
    role: user.role,
  });
  if ((await user.countRefreshTokens()) <= CONSTANTS.MAX_DEVICES_AMOUNT) {
    await user.createRefreshToken({ value: tokenPair.refresh });
  } else {
    const [oldRefreshToken] = await user.getRefreshTokens({
      order: [['updatedAt', 'ASC']],
    });
    await oldRefreshToken.update({
      value: tokenPair.refresh,
    });
  }
  return {
    user: UserService.prepareUser(user),
    tokenPair,
  };
};

module.exports.refreshSession = async refreshTokenInstance => {
  const user = await refreshTokenInstance.getUser();
  const tokenPair = await JwtService.createTokenPair({
    id: user.id,
    email: user.email,
    role: user.role,
  });
  await refreshTokenInstance.update({
    value: tokenPair.refresh,
  });
  return {
    user: UserService.prepareUser(user),
    tokenPair,
  };
};
