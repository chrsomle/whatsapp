import React from 'react';
import { LaptopMacSharp } from '@material-ui/icons';
import './InactiveBox.css';

const InactiveBox = () => {
	return (
		<div className="wrapper">
			<div className="Inactive">
				<img
					src="https://web.whatsapp.com/img/intro-connection-dark_0ee01153183b5ebd9b296399cc2104b0.jpg"
					alt=""
					width="250"
					height="250"
					style={{ borderRadius: '50%' }}
				/>
				<h3>Keep your phone connected</h3>
				<p>
					WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone
					to Wi-Fi.
				</p>
				<div className="download">
					<LaptopMacSharp style={{ fontSize: 17, color: '#a6a8aa' }} />
					<span>
						WhatsApp is available for Windows.&nbsp;
						<a target="_blank" rel="noopener noreferrer" href="https://www.whatsapp.com/download">
							Get it here
						</a>
						.
					</span>
				</div>
			</div>
		</div>
	);
};

export default InactiveBox;
