import React from 'react';
import { NotificationsOff as Bell, ChevronRight as Arrow } from '@material-ui/icons/';

import './Alert.css';

function handleNotif() {
	if (!('Notification' in window))
		console.log('This browser does not support desktop notification');
	else if (Notification.permission !== 'denied' || Notification.permission === 'default') {
		Notification.requestPermission(function (permission) {
			if (permission === 'granted') {
				var n = new Notification('Hi there!');
				document.getElementById('alert').style.display = 'none';
				n.close();
			}
		});
	}
}

export default () => {
	return (
		<span
			onClick={() => handleNotif()}
			className="Alert"
			id="alert"
			style={{ display: Notification.permission === 'granted' ? 'none' : null }}>
			<div className="alert-icon">
				<Bell style={{ fontSize: 23, color: '#085373' }} />
			</div>
			<div className="msg">
				<div className="about">Get notified of new messages</div>
				<span className="alert-detail">
					<span className="a-like">Turn on desktop notifications</span>
					<Arrow style={{ fontSize: 16 }} />
				</span>
			</div>
		</span>
	);
};
