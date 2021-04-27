const express = require('express');
const authRouter = express.Router();

/* 
{
  tokenPair: {
    access: 'sfgbgdnlmdglkbndklb.sdg.sfg',
    refresh: 'esrgrs.srfg.srgr'
  }
}
*/

authRouter.post('/sign-in'); // login
authRouter.post('/sign-up'); // registration
authRouter.post('/refresh'); // refresh token pair

module.exports = authRouter;