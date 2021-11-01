import React from 'react';
import iframe from 'react-iframe';

function HappyPlaylist(props) {
    return (
			<div>
				<button>Back</button>
				<h1>Sounds good to me!</h1>
				<p>Here are some playlist I'd recommend</p>

				<iframe
					src='https://open.spotify.com/embed/playlist/37i9dQZF1DX2sUQwD7tbmL'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					src='https://open.spotify.com/embed/playlist/37i9dQZF1DWYBO1MoTDhZI'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					src='https://open.spotify.com/embed/playlist/37i9dQZF1DX2SK4ytI2KAZ'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					src='https://open.spotify.com/embed/playlist/6CztAZpKGQvHI5SKbDyrl4'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					src='https://open.spotify.com/embed/playlist/2l3zXpmezQBYf93rN2kyKI'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					src='https://open.spotify.com/embed/playlist/37i9dQZF1EIf6meFuWnpYx'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>
			</div>
		);
}

export default HappyPlaylist;