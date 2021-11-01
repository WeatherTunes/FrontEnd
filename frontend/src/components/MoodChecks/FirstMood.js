import React, { useState, useEffect} from 'react';
import MoodsStyle from './MoodsStyle.css'

function FirstMood(props) {
	const [home, setHome] = useState();
    const [userZip, setUserZip] = useState('66209');
    const [click, setClick] = useState(false);

    const handleChange = (event) => {
	    event.preventDefault();
		setUserZip(event.target.value);
    }
    	const handleSubmit = (event) => {
				event.preventDefault();
				setClick(!click);
			};


    let url = `api.openweathermap.org/data/2.5/weather?zip=${userZip}&appid=601c63e455d4e65901d79b119e46b3e5&units=imperial`

    	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setHome(json);
			})

			.catch(console.error);
	}, [click]);


    return (
        <div>
            <div className="questions1">
                <h1>Welcome!</h1>
                <p>It is currently temp and condition</p>
                <p>What type of mood should your playlist be in today></p>

                <button className="boxUno">
                    <h3>Happy</h3>
                </button>

                <button className="boxDos">
                    <h3>Angry</h3>
                </button>

                <button className="boxTres">
                    <h3>Ehh</h3>
                </button>

                <p>Current locaiton:</p>
            



            </div>
            
        </div>
    );
    };
export default FirstMood;