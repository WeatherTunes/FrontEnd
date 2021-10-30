import React, { useState } from 'react';


function AccountCreate(props) {
    return (
			<div>
				<h1>WeatherTunes</h1>

				<div className='ImAbox'>
					<h3>Please make an account</h3>
					<form>
						<label>Email</label>
						<input
							type='email'
							className='emailInput'
							placeholder='Enter email'
						/>

						<label>First Name</label>
						<input
							type='String'
							className='NameInput'
							placeholder='Please enter your first name'
						/>

						<label>Zipcode</label>
						<input
							type='numbers'
							className='zipcodeInput'
							placeholder='Enter Zipcode'
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
					<label>
						Please enter your email that you created an account with
					</label>
					<input
						type='email'
						className='Returning'
						placeholder='Hi Friend!'></input>
                        <button type="submit" className="UserButton">Submit</button>
				</div>


			</div>
		);

}
export default AccountCreate;