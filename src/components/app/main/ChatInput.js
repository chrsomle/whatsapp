import React, { useState } from 'react';
import { InsertEmoticon as Emoticon, Mic, Send } from '@material-ui/icons';

import './ChatInput.css';

const icon = { fontSize: 28, color: '#828689', cursor: 'pointer' };

const ChatInput = () => {
	const [type, setType] = useState(false);
	return (
		<div className="ChatInput">
			<Emoticon style={icon} />
			<input
				type="text"
				id="message"
				placeholder="Type a message"
				onChange={(e) => (e.target.value === '' ? setType(false) : setType(true))}
			/>
			{type ? <Send style={icon} /> : <Mic style={icon} />}
		</div>
	);
};

export default ChatInput;
