const authRouter = require('express').Router();
const AuthController = require('../controllers/authController');
/*
  {
      accessToken: '12q.aw2.reg', // 20 min. n count
      refreshToken: '123.sdg.654' // 20 days. 1 count
  }
*/
authRouter.post('/sign-in', AuthController.signIn);
// authRouter.post('/sign-up', AuthController.signUp);
// authRouter.post('/refresh', AuthController.refresh);

module.exports = authRouter;
