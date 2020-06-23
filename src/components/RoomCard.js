import React from 'react';
import './RoomCard.css';

export default function RoomCard({ price, img, desc }) {
	return (
		<div className="room-container">
			<p className="room-price">
				<span className="span-price">${price}</span> <span className="span-night">per night</span>
			</p>
			<div className="room-img-wrapper">
				<img className="room-image" src={img} alt="room" />
			</div>
			<h2 className="h2">{desc}</h2>
		</div>
	);
}
