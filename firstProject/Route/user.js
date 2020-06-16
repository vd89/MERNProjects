/** @format */

const { Router } = require('express');

const router = Router();

/*
  @Router: /api/user/test GET
  @Test View route
  @Public Route
*/

router.get('/test', (req, res) => {
	res.json({ Msg: 'This is the rest Route' });
});

/*
  @Router : /api/user/register POST
  @Register New User
  @Public Route
*/

router.post('/register', (req, res) => {
	res.json({ Msg: 'This route is working' });
});

export default router;
