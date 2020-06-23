import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Rooms from './pages/Rooms';
import Default from './pages/Default';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Room from './components/Room';
import data from './data';
// import { LoremIpsum } from 'react-lorem-ipsum';

function App() {
	let routes = data.map((room, index) => {
		let {
			background,
			type,
			price,
			img_url,
			size,
			max_capacity,
			pets_allowed,
			free_breakfast,
			desc,
			extras,
			details,
			room_url
		} = room;

		return (
			<Route key={index} exact path={room_url}>
				<Room
					background={background}
					type={type}
					price={price}
					desc={desc}
					img={img_url}
					size={size}
					capacity={max_capacity}
					pets={pets_allowed}
					breakfast={free_breakfast}
					extras={extras}
					details={details}
				/>
			</Route>
		);
	});

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/Shore-Resort/">
					<Homepage />
				</Route>
				<Route exact path="/Shore-Resort/view-rooms">
					<Rooms />
				</Route>
				{routes}
				<Route exact path="/Shore-Resort/book-rooms">
					<Homepage />
				</Route>
				<Route exact path="/Shore-Resort/contact">
					<Contact />
				</Route>
				<Route>
					<Default />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
