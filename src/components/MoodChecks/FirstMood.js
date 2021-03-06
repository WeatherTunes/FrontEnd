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


    

    // 	useEffect(() => {
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			setHome(json);
	// 		})

	// 		.catch(console.error);
	// }, [click]);


    return (
        <div>
            <div className="questions1">
                <h1>Hello, Nick!</h1>
                <p>It is currently 52 F and scattered storms</p>
                <p>What type of mood should your playlist be in today</p>

                <button className="boxUno">
                    <h3>Happy</h3>
                </button>

                <button className="boxDos">
                    <h3>Angry</h3>
                </button>

                <button className="boxTres">
                    <h3>Ehh</h3>
                </button>

                <p>Current locaiton: Leawood, KS</p>
            



            </div>
            
        </div>
    );
    };
export default FirstMood;