import React from 'react';
import { Link } from 'react-router-dom';
import RoomCard from './RoomCard';
import data from '../data';
import './FeaturedRooms.css';

export default function FeaturedRooms() {
	let rooms = data
		.filter(room => room.featured)
		.map((room, index) => (
			<Link key={index} to={room.room_url}>
				<RoomCard price={room.price} desc={room.type} img={room.img_url} />
			</Link>
		))
		;

	return (
		<section className="featured-rooms-container">
			<h1 className="services">Featured Rooms</h1>
			<hr className="featured-rooms-hr" />
			<div className="featured-rooms-grid">{rooms}</div>
		</section>
	);
}
