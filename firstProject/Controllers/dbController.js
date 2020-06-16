/** @format */

import config from 'config';
import { connect } from 'mongoose';

export default async function dbController() {
	try {
		const mongoUri = config.get('mongoDB');
		const opt = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		};
		await connect(mongoUri, opt);
		console.log(`MongoDB is connected with the App ... 🤺 🤺 🤺`);
	} catch (error) {
		console.log('error :>> ', error);
	}
}
