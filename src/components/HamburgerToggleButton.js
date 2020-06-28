import React from 'react';
import './HamburgerToggleButton.css';

export default function HamburgerToggleButton({ click }) {
	return (
		<button className="toggle-button" onClick={click}>
			<div className="toggle-button-line" />
			<div className="toggle-button-line" />
			<div className="toggle-button-line" />
		</button>
	);
}
