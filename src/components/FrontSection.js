import React from 'react';
import { Link } from 'react-router-dom';
import './FrontSection.css';

export default function FrontSection({
	background = 'beach-resort.jpg',
	title,
	content,
	btnLabel = 'Our Rooms',
	link = '/Shore-Resort/view-rooms'
}) {
	return (										
		<section className="front-section-container" style={{ backgroundImage: `url(/Shore-Resort/images/${background})` }}>
			<div className="front-section-central">
				<h1 className="front-section-title">{title}</h1>
				<hr />
				<p className="front-section-content">{content}</p>
				<Link to={link}>
					<button className="front-section-button">{btnLabel}</button>
				</Link>
			</div>
		</section>
	);
}
