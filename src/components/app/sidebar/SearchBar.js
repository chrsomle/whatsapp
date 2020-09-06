import React, { useState } from 'react';
import { Search, ArrowBack as Back, Clear } from '@material-ui/icons';

import './SearchBar.css';

const icon = { color: 'var(--dark-detail)', fontSize: 20, cursor: 'pointer', opacity: 0.6 };

export default () => {
	const [type, setType] = useState(false);
	const [focus, setFocus] = useState(false);

	function handleBack() {
		document.getElementById('SearchBar').value = '';
		document.getElementById('SearchBar').blur();
		setFocus(false);
		setType(false);
	}

	function handleSearch() {
		document.getElementById('SearchBar').focus();
		setFocus(true);
	}

	window.addEventListener('blur', () => {
		if (!document.getElementById('SearchBar').value) handleBack();
	});

	return (
		<div className="SearchBar">
			<div className="bar">
				<span>
					{focus ? (
						<Back className="icon" style={{ ...icon, fontSize: 23 }} onClick={() => handleBack()} />
					) : (
						<Search className="icon" style={icon} onClick={() => handleSearch()} />
					)}
					<input
						type="search"
						id="SearchBar"
						placeholder="Search or start new chat"
						onFocus={() => {
							setFocus(true);
						}}
						onChange={(e) => (e.target.value === '' ? setType(false) : setType(true))}
					/>
					<Clear
						className="icon"
						id="clear"
						style={{
							...icon,
							display: !type ? 'none' : null,
						}}
						onClick={() => {
							document.getElementById('SearchBar').value = '';
							document.getElementById('SearchBar').focus();
							setFocus(true);
							setType(false);
						}}
					/>
				</span>
			</div>
		</div>
	);
};
