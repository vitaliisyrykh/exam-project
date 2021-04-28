const express = require('express');
const AuthController = require('../controllers/authController');
const authRouter = express.Router();
/* 
{
  tokenPair: {
    access: 'sfgbgdnlmdglkbndklb.sdg.sfg',
    refresh: 'esrgrs.srfg.srgr'
  }
}
*/

authRouter.post('/sign-in', AuthController.signIn); // login
// authRouter.post('/sign-up'); // registration
// authRouter.post('/refresh'); // refresh token pair

module.exports = authRouter;
