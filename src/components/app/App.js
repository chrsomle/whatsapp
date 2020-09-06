import React from 'react';
import Nav from './sidebar/Nav';
import Alert from './sidebar/Alert';
import SearchBar from './sidebar/SearchBar';
import Recent from './sidebar/Recent';
import Overlay from './sidebar/Overlay';
import ChatBox from './main/ChatBox';

import './App.css';

function App() {
	return (
		<div className="App">
			<section className="side">
				<Nav />
				<Alert />
				<SearchBar />
				<Recent />
				<Overlay type="" />
			</section>
			<section className="main">
				<ChatBox />
			</section>
		</div>
	);
}

export default App;
