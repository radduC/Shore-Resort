import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
	// const [open, setOpen] = useState(false);
	// const handleClick = () => setOpen(!open);

	const menuOptions = ['Home', 'Rooms', 'Contact Us'];
	const menu = menuOptions.map((option, index) => {
		switch (option) {
			case 'Home':
				return (
					<li key={index}>
						<NavLink exact activeClassName="active" className="nav-link" to="/Shore-Resort/">
							Home
						</NavLink>
					</li>
				);

			case 'Rooms':
				return (
					<li key={index}>
						<NavLink exact activeClassName="active" className="nav-link" to="/Shore-Resort/view-rooms">
							Rooms
						</NavLink>
					</li>
				);

			default:
				return (
					<li key={index}>
						<NavLink exact activeClassName="active" className="nav-link" to="/Shore-Resort/contact">
							Contact Us
						</NavLink>
					</li>
				);
		}
	});

	// useEffect(handleClick, []);

	return (
		<nav className="navbar">
			{/* <div className="navbar-header"> */}
			<Link to="/Shore-Resort/">
				<h1 className="navbar-brand">
					Shore <span className="resort">Resort</span>
				</h1>
			</Link>

			{/* <button className="navbar-hamburger" onClick={handleClick}>
					<FaBars />
				</button> */}
			{/* </div> */}
			<ul className="nav">{menu}</ul>
			{/* <ul className={open ? 'nav' : 'nav show-nav'}>{menu}</ul> */}
		</nav>
	);
}
