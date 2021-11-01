import React from 'react';
import iframe from 'react-iframe';

function EhhPlaylist(props) {
    return (
			<div>
				<button>Back</button>
				<h1>Sounds good to me!</h1>

				<p>Here are some playlist I'd recommend</p>

				<iframe
					src='https://open.spotify.com/embed/playlist/37i9dQZF1DWVV27DiNWxkR'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					src='https://open.spotify.com/embed/playlist/7kEE6TqULEqEkWETKhXscw'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					src='https://open.spotify.com/embed/playlist/0zHkISuEcNr2Zav2X4TXCQ'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					src='https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					src='https://open.spotify.com/embed/playlist/4VTWL44UfFqQxMN8noXNAX'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>

				<iframe
					src='https://open.spotify.com/embed/playlist/0oLzSZvvLcNH5EK5xgPh0f'
					width='300'
					height='80'
					frameborder='0'
					allowtransparency='true'
					allow='encrypted-media'></iframe>
			</div>
		);
}

export default EhhPlaylist;