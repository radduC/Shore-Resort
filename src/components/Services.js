import React from 'react';
import Card from './Card';
import './Services.css';

export default function Services() {
	return (
		<section className='services-container'>
			<h1 className="services">Services</h1>
			<hr className="services-hr" />
			<div className="services-grid">
				<Card
					icon={'fas fa-cocktail'}
					title={'Free Cocktails'}
					desc="Enjoy great flavors or challenge the bartender!"
				/>
                <Card
					icon={'fas fa-shuttle-van'}
					title={'Free Shuttle'}
					desc="No need to worry about transport!"
				/>
                 <Card
					icon={'fas fa-wifi'}
					title={'Free Wi-Fi'}
					desc="You will never have to worry about the connection uptime or quality!"
				/>
                 <Card
					icon={'fas fa-dumbbell'}
					title={'Free Gym'}
					desc="Being on vacation does not need to get you out of shape! Our gym has everything you need."
				/>
			</div>
		</section>
	);
}
