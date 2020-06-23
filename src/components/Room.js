import React from 'react';
import FrontSection from '../components/FrontSection';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Room.css';

export default function Room({ background, img, price, type, size, capacity, desc, pets, breakfast, extras, details }) {
	let features = extras.map((feature, index) => (
		<p key={index} className="features">
			<i className="fas fa-caret-right" /> {feature}
		</p>
	));

	let room_pictures = details.map((image, index) => (
		<div key={index} className="room-img-wrapper">
			<img src={`/Shore-Resort/images/${image}`} alt="room" className="room-image" />
		</div>
	));

	let settings = {
		dots           : false,
		infinite       : true,
		speed          : 500,
		slidesToShow   : 1,
		slidesToScroll : 1,
		fade           : true
		// autoplay       : true,
		// speed          : 2000,
		// autoplaySpeed  : 2000,
		// cssEase        : 'linear',
		// pauseOnHover: true
	};

	return (
		<div>
			<FrontSection background={background} title={type} btnLabel="Other rooms" />
			<section className="carousel">
				<Slider {...settings}>{room_pictures}</Slider>
			</section>
			<section className="room_container">
				<span>
					<h1>Details</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur sequi officiis quidem
						voluptatum minima ut modi excepturi reprehenderit accusantium ducimus aperiam ea quasi fuga vel,
						libero eaque, minus tempora. Vitae quidem totam possimus incidunt mollitia soluta voluptatem
						nisi blanditiis consequatur dignissimos! Explicabo repellat minus eos omnis tempora rem sit
						porro, vel tempore maxime velit quisquam? Numquam nostrum nisi iste.
					</p>
				</span>
				<span>
					<h1>Info</h1>
					<p className="features">Price: ${price}</p>
					<p className="features">Size: {size}</p>
					<p className="features">Capacity: {capacity}</p>
					{breakfast ? (
						<p className="features">Free breakfast</p>
					) : (
						<p className="features">Breakfast not included</p>
					)}
					{pets ? <p className="features">Pets allowed</p> : <p className="features">Pets not allowed</p>}
				</span>
				<span>
					<h1>Extras</h1>
					{features}
				</span>
			</section>
		</div>
	);
}
