import React from 'react';
import FrontSection from '../components/FrontSection';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
// import Room from '../components/Room';
// import data from '../data';

export default function Homepage() {
	return (
		<div>
			<FrontSection title={'Luxurious Rooms'} content={'Deluxe Rooms starting at $199'} />
			<Services />
			<FeaturedRooms />
		</div>
	);
}
