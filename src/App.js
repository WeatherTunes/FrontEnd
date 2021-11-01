import React from 'react';
import './App.css';
import FirstMood from './components/MoodChecks/FirstMood';
import AngryPlaylist from './components/Playlist/Angry/AngryPlaylist';
import EhhPlaylist from './components/Playlist/Ehh/EhhPlaylist';
import HappyPlaylist from './components/Playlist/Happy/HappyPlaylist';
import AccountCreate from './components/AccountCreate/AccountCreate';

function App() {
	return (
		<div>
			<AccountCreate />
			<FirstMood />
			<HappyPlaylist />

			<AngryPlaylist />
			<EhhPlaylist />
		</div>
	);
}

export default App;
