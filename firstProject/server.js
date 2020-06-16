/** @format */

import express from 'express';
import dbController from './Controllers/dbController';

const app = express();

//Database Connection
dbController();

// Express Server
const port = process.env.PORT || 8085;
app.listen(port, () => {
	console.log(`The Server is running on port ${port}....👍 👍 `);
});
