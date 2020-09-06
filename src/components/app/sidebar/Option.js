import React from 'react';

import './Option.css';

export default function Option({ feature = 'Coming Soon' }) {
	return <div className="Option">{feature}</div>;
}
