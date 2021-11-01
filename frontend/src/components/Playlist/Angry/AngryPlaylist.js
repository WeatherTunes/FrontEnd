import React from 'react';
import iframe from 'react-iframe';

function AngryPlaylist(props) {
    var iframe = require('iframe');
    return (
			<div className='angry'>
				<button>Back</button>
				<h1>Sounds good to me!</h1>

				<p>Here are some playlist I'd recommend</p>

				<iframe
					className='box'
					src='https://open.spotify.com/embed/playlist/1FKI2zMClmJl13g0I5PdBS'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					className='box'
					src='https://open.spotify.com/embed/playlist/37i9dQZF1DX5J7FIl4q56G'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					className='box'
					src='https://open.spotify.com/embed/playlist/2lW2gTJacU2woEjIA8ZIBO'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					className='box'
					src='https://open.spotify.com/embed/playlist/37i9dQZF1DXcfZ6moR6J0G'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					className='box'
					src='https://open.spotify.com/embed/playlist/0OpXS05BmizNOtjmxH4hQ2'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					className='box'
					src='https://open.spotify.com/embed/playlist/37i9dQZF1DX1cJWWyylDuw'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>
			</div>
		);
}

export default AngryPlaylist;