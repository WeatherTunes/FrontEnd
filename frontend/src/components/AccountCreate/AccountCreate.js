import React, { useState } from 'react';
import AccountCreateStyle from "../AccountCreate/AccountCreateStyle.css"
import axios from 'axios';


const AccountCreate = ({ handleAddTodo, setTodos, count, setCount }) => {
	let initialState = {
		email: '',
		firstname: '',
		zipcode: '',
	};

	const [userText, setUserText] = useState(initialState);

	const handleSaveClick = (event) => {
		event.preventDefault();
			handleAddTodo(userText);

			axios
				.post(`https://weathertunes.herokuapp.com/api/users`, {
					email: userText.email,
					firstname: userText.content,
				})
				.then(setUserText(initialState))
				.then(
					axios
						.get(`https://weathertunes.herokuapp.com/api/users`)
						.then((response) => {
							setTodos(response.data);
						})
						.catch((err) => {
							console.log(err);
						})
				);
		}

	return(
		<div className='wholePage'>
			<h1>WeatherTunes</h1>
			<div className='fancyBox'>
				<div className='ImAbox'>
					<h3 className='Make'>Please make an account</h3>
					<form className='formField' onSubmit={handleSaveClick}>
						<input
							type='email'
							className='Input'
							placeholder="What's your email?"
						/>
						<input
							type='String'
							className='Input'
							placeholder="What's your name?"
						/>
						<input
							type='numbers'
							className='nput'
							placeholder='Six digit zipcode?'
						/>
					</form>

					<>
						<button type='submit' className='UserButton'>
							Submit!
						</button>
					</>
				</div>

				<div className='ImANicerBox'>
					<h3>Already have an account?</h3>
					<input
						type='email'
						className='Returning'
						placeholder='Please enter your email'></input>
					<button type='submit' className='UserButton'>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
    };
export default AccountCreate;