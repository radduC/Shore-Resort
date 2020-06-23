import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RoomCard from '../components/RoomCard';
import data from '../data';
import './Rooms.css';

export default function Rooms() {
	//Sort room data by price desc
	let sortedData = data.sort((room1, room2) => room2.price - room1.price);
	let maxPrice = sortedData[0].price; //to dynamically update the maximum price on the price range slider

	//The event handler used to search and update the rooms by combined criteria
	const filterArrayByEverything = (
		price = roomPrice,
		type = roomType,
		pets_allowed = pets,
		breakfast_allowed = breakfast
	) => {
		let filteredArray = [];

		pets_allowed
			? breakfast_allowed
				? type === 'all'
					? (filteredArray = sortedData.filter(
							room => room.price <= price && room.pets_allowed && room.free_breakfast
						))
					: (filteredArray = sortedData.filter(
							room =>
								room.type.toLowerCase().includes(type.toLowerCase()) &&
								room.price <= price &&
								room.pets_allowed &&
								room.free_breakfast
						))
				: type === 'all'
					? (filteredArray = sortedData.filter(room => room.price <= price && room.pets_allowed))
					: (filteredArray = sortedData.filter(
							room =>
								room.type.toLowerCase().includes(type.toLowerCase()) &&
								room.price <= price &&
								room.pets_allowed
						))
			: breakfast_allowed
				? type === 'all'
					? (filteredArray = sortedData.filter(room => room.price <= price && room.free_breakfast))
					: (filteredArray = sortedData.filter(
							room =>
								room.type.toLowerCase().includes(type.toLowerCase()) &&
								room.price <= price &&
								room.free_breakfast
						))
				: type === 'all'
					? (filteredArray = sortedData.filter(room => room.price <= price))
					: (filteredArray = sortedData.filter(
							room => room.type.toLowerCase().includes(type.toLowerCase()) && room.price <= price
						));

		setRooms(mapRooms(filteredArray));
	};

	//Function used to populate the displayed rooms
	const mapRooms = array =>
		array.map((room, index) => (
			<Link key={index} to={room.room_url}>
				<RoomCard price={room.price} desc={room.type} img={room.img_url} />
			</Link>
		));

	//Our state
	const [rooms, setRooms] = useState([]);
	const [roomPrice, setRoomPrice] = useState(maxPrice);
	const [roomType, setRoomType] = useState('all');
	const [pets, setPets] = useState(false);
	const [breakfast, setBreakfast] = useState(false);

	//Updates the displayed rooms with the default values after Rooms is mounted
	useEffect(filterArrayByEverything, []);

	return (
		<div className="featured-rooms-container">
			<h1 className="services">Search Rooms</h1>
			<hr className="featured-rooms-hr" />
			<div className="options-container">
				<span className="options">
					<p className="label">
						Room Price: $<span id="room-price">{roomPrice}</span>
					</p>
					<div>
						<input
							type="range"
							name="room-price-slider"
							id="room-price-slider"
							min={0}
							max={maxPrice + 1}
							step={10}
							value={roomPrice}
							onChange={event => {
								setRoomPrice(Number(event.target.value));
								filterArrayByEverything(Number(event.target.value), roomType, pets, breakfast);
							}}
						/>
					</div>
				</span>

				<span className="options">
					<p className="label">Room Type</p>
					<div>
						<select
							name="room_type"
							id="room_type"
							onChange={event => {
								setRoomType(event.target.value);
								filterArrayByEverything(roomPrice, event.target.value, pets, breakfast);
							}}
						>
							<option value="all">All</option>
							<option value="Family">Family</option>
							<option value="Double">Double</option>
							<option value="Single">Single</option>
						</select>
					</div>
				</span>

				<span className="options-checkboxes">
					<p className="checkboxes">
						<input
							type="checkbox"
							name="pets"
							id="pets"
							onChange={() => {
								filterArrayByEverything(roomPrice, roomType, !pets, breakfast);
								setPets(!pets);
							}}
						/>
						<label htmlFor="pets" className="label-checkbox">
							{' '}
							Pets
						</label>
					</p>
					<p className="checkboxes">
						<input
							type="checkbox"
							name="breakfast"
							id="breakfast"
							onChange={() => {
								filterArrayByEverything(roomPrice, roomType, pets, !breakfast);
								setBreakfast(!breakfast);
							}}
						/>
						<label htmlFor="breakfast" className="label-checkbox">
							{' '}
							Breakfast
						</label>
					</p>
				</span>
			</div>
			<section className="rooms-grid">{rooms}</section>
		</div>
	);
}
