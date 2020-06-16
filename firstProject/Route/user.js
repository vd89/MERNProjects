/** @format */

import { Router } from 'express';

import { create, viewUsers } from '../Controllers/userController';

const router = Router();

/*
  @Router: /api/users/ GET
  @Test View route
  @Public Route
*/

router.get('/', viewUsers);

/*
  @Router : /api/users/register POST
  @Register New User
  @Public Route
*/

router.post('/register', create);

export default router;
