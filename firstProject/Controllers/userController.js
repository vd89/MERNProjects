/** @format */

import User from '../Models/User';

//View user
const viewUsers = async (req, res) => {
	try {
		const isUsers = await User.find();
		res.status(200).json({ users: isUsers });
	} catch (error) {
		console.log(error);
		res.status(404).json({ ErrMsg: 'There is an error in registration' });
	}
};

//Register New user
const create = async (req, res) => {
	try {
		const newUser = await User(req.body);
		await newUser.save();
		res.status(201).json({ Msg: 'User is registered' });
	} catch (error) {
		console.log(error);
		res.status(404).json({ ErrMsg: 'There is an error in registration' });
	}
};

export { create, viewUsers };
