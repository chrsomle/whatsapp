import React from 'react';
import { Avatar } from '@material-ui/core';

import './Chat.css';

export default function Chat({ user = `Alexis Ren`, msg = `Hi, what's up?`, read = false }) {
	if (user.length > 14) user = user.substring(0, 14) + '...';
	if (msg.length > 40) msg = msg.substring(0, 40) + '...';
	return (
		<div className="Chat">
			<div className={`time ${read ? 'active' : ''}`}>9:28 PM</div>
			<div className="user-profile">
				<Avatar alt={user} src="/" className="avatar" style={{ width: 49, height: 49 }} />
			</div>
			<div className={`detail ${read ? 'read' : ''}`}>
				<h4>{user}</h4>
				<p>{msg}</p>
			</div>
		</div>
	);
}
