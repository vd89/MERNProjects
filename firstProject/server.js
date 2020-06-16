/** @format */

import express from 'express';
import dbController from './Controllers/dbController';

import userRoute from './Route/user';

const app = express();

// App Middleware
app.use(express.json());

//Router
app.use('/api/users', userRoute);

//Database Connection
dbController();

// Express Server
const port = process.env.PORT || 8085;
app.listen(port, () => {
	console.log(`The Server is running on port ${port}....👍 👍 `);
});
