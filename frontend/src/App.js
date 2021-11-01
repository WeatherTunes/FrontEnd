import './App.css';
// import AccountCreate from './components/AccountCreate/AccountCreate';
import FirstMood from './components/MoodChecks/FirstMood'
import AngryPlaylist from './components/Playlist/Angry/AngryPlaylist';
import EhhPlaylist from './components/Playlist/Ehh/EhhPlaylist';
import HappyPlaylist from './components/Playlist/Happy/HappyPlaylist';
import { Route, Link } from 'react-router-dom'
import AccountCreate from './components/AccountCreate/AccountCreate';

function App() {


  return (
		<div>
			{/* <div className="BLACK">
    {/* <AccountCreate/> */}
			{/* <Link className='Home' to='/'></Link>
    <Link className='Angry' to='/angry'></Link>
    <Link className='Ehh' to='Ehh'></Link>
    <Link className='Happy' to='Happy'></Link> */}
			{/* </div>

    <div>
      <Route exact path='/' component={FirstMood}/>
      <Route exact path='/Angry' component={AngryPlaylist}/>
      <Route exact path='/Ehh' component={EhhPlaylist}/>
      <Route exact path='Happy' component={HappyPlaylist}/>
    </div> */}{' '}
			*/}
			<AccountCreate />
			<FirstMood />
			<HappyPlaylist/>
      
			<AngryPlaylist/>
			<EhhPlaylist/>
		</div>
	);}

export default App;
