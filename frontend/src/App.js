import './App.css';
import AccountCreate from './components/AccountCreate/AccountCreate';
import FirstMood from './components/MoodChecks/FirstMood'
import AngryPlaylist from './components/Playlist/Angry/AngryPlaylist';
import EhhPlaylist from './components/Playlist/Ehh/EhhPlaylist';
import HappyPlaylist from './components/Playlist/Happy/HappyPlaylist';

function App() {
  return (
    <div className="BLACK">
    {/* <AccountCreate/> */}
    {/* <FirstMood/> */}
    <AngryPlaylist/>
    <EhhPlaylist/>
    <HappyPlaylist/>
    </div>
  )}

export default App;
