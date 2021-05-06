const express = require('express');

const authRouter = express.Router();

authRouter.post('/sign-in');
authRouter.post('/sign-up');
authRouter.post('/refresh');

module.exports = authRouter;