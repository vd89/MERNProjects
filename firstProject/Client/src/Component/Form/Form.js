/** @format */
import React, { Component } from 'react';
import axios from 'axios';
export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
		};
	}
	onChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	onSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.post('/api/users/register', this.state)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => console.log(err));

		console.log({ Msg: this.state });
	};
	render() {
		return (
			<>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8 m-auto'>
							<div className='card'>
								<div className='card-header'>
									<h1>This is is the Form</h1>
								</div>
								<div className='card-body'>
									<form onSubmit={this.onSubmitHandler}>
										<div className='form-group'>
											<label htmlFor='name'>Name</label>
											<input
												type='text'
												name='name'
												placeholder='Provide you name'
												id='name'
												className='form-control'
												value={this.state.name}
												onChange={this.onChangeHandler}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='email'>Email</label>
											<input
												type='email'
												name='email'
												placeholder='Provide you Email'
												id='email'
												className='form-control'
												value={this.state.email}
												onChange={this.onChangeHandler}
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='password'>password</label>
											<input
												type='text'
												name='password'
												placeholder='Provide you password'
												id='password'
												className='form-control'
												value={this.state.password}
												onChange={this.onChangeHandler}
											/>
										</div>
										<div className='card-footer'>
											<input type='submit' value='Submit' />
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
