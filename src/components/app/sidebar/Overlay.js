import React from 'react';
import { ArrowBack as Back } from '@material-ui/icons';

import './Overlay.css';

function toggleOverlay() {
	document.getElementById('Overlay').classList.toggle('show');
	setTimeout(() => document.getElementById('main').classList.toggle('fade'), 300);
	document.getElementById('main').classList.toggle('fade');
}

export default function Overlay() {
	return (
		<div id="Overlay" className="Overlay">
			<header>
				<Back className="toggler" onClick={() => toggleOverlay()} />
			</header>
			<main id="main">This is Main</main>
		</div>
	);
}
