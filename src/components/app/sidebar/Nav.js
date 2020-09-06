import React from 'react';
import Option from './Option';
import { Avatar } from '@material-ui/core';
import { DonutLarge, Chat, MoreVert } from '@material-ui/icons';

import './Nav.css';

function toggleMenu(e) {
	document.getElementById('menu').classList.toggle('menu');
}

function toggleOverlay() {
	document.getElementById('Overlay').classList.toggle('show');
	document.getElementById('menu').classList.toggle('menu');
}

function Nav() {
	return (
		<header className="Nav">
			<Avatar
				alt="Chris"
				src="./Profile.jpg"
				className="profile"
				onClick={() => document.getElementById('Overlay').classList.toggle('show')}
			/>
			<div className="options">
				<DonutLarge style={{ fontSize: 22 }} />
				<Chat style={{ fontSize: 22 }} />
				<MoreVert onClick={(e) => toggleMenu(e)} />
				<div id="menu" className="d-none">
					<Option feature="New Group" />
					<Option feature="Create a room" />
					<div onClick={() => toggleOverlay()}>
						<Option feature="Profile" />
					</div>
					<div onClick={() => toggleOverlay()}>
						<Option feature="Archived" />
					</div>
					<div onClick={() => toggleOverlay()}>
						<Option feature="Starred" />
					</div>
					<div onClick={() => toggleOverlay()}>
						<Option feature="Settings" />
					</div>
					<Option feature="Log out" />
				</div>
			</div>
		</header>
	);
}

export default Nav;
