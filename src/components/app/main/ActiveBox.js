import React from 'react';
import ChatInfo from './ChatInfo';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

import './ActiveBox.css';
const ActiveBox = () => {
	return (
		<div className="ActiveBox">
			<ChatInfo />
			<ChatMessages />
			<ChatInput />
		</div>
	);
};

export default ActiveBox;
