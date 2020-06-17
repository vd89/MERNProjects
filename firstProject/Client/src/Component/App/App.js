/** @format */

import React, { Component } from 'react';

import Form from '../Form/Form';
import Footer from '../HeaderFooter/Footer';
import Header from '../HeaderFooter/Header';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<h1>Hello Dax</h1>
				<Form />
				<Footer />
			</div>
		);
	}
}
