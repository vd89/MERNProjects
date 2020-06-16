/** @format */
/*
 *@ToDO Need to add the require
 *
 */
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	avatar: {
		type: String,
	},
	dataOfBirth: {
		type: Date,
	},
	gender: {
		type: String,
	},
	mobile: {
		type: Number,
	},
	website: {
		type: String,
	},
	experienct: {
		type: String,
	},
	experienct: {
		type: String,
	},
	language: {
		type: Array,
	},
	color: {
		type: String,
	},
});
export default model('User', userSchema, 'users');
