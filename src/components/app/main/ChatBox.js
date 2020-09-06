import React, { useState } from 'react';
import { Close, PowerSettingsNew } from '@material-ui/icons';
import ActiveBox from './ActiveBox';
import InactiveBox from './InactiveBox';

import './ChatBox.css';

export default function ChatBox() {
	const [active, setActive] = useState(true);
	return (
		<div className="ChatBox">
			<span className="activator" onClick={() => setActive(!active)}>
				{active ? <Close /> : <PowerSettingsNew />}
			</span>
			{active ? <ActiveBox /> : <InactiveBox />}
		</div>
	);
}
