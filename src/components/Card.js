import React from 'react';
import './Card.css';

export default function Card({ icon, title, desc }) {
	return (
		<div className="card-container">
			<div className="card-header">
				<span className="card-icon">
					<i className={icon} />
				</span>
				<h4 className="card-title">{title}</h4>
			</div>
			<p className="card-description">{desc}</p>
		</div>
	);
}
