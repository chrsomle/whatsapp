import React from 'react';
import { Avatar } from '@material-ui/core';
import { Search, AttachFile, MoreVert } from '@material-ui/icons';

import './ChatInfo.css';

const icon = { fontSize: 25, color: 'var(--dark-accent)', cursor: 'pointer', marginLeft: '20px' };

const ChatInfo = () => {
	return (
		<div className="ChatInfo">
			<div className="person">
				<Avatar />
				<span className="name">Drake</span>
			</div>
			<div className="utils">
				<Search style={icon} />
				<AttachFile style={{ ...icon, transform: 'scaleX(-1) rotate(315deg)' }} />
				<MoreVert style={icon} />
			</div>
		</div>
	);
};

export default ChatInfo;
