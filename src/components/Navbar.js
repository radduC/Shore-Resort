import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import HamburgerToggleButton from './HamburgerToggleButton';
import './Navbar.css';

export default function Navbar() {
	const [open, setOpen] = useState(window.innerWidth <= 1100 ? false : true);

	useEffect(() => {
		window.addEventListener('resize', updateDisplay);
		return _ => window.removeEventListener('resize', updateDisplay);
	});

	const handleClick = () => setOpen(!open);

	const updateDisplay = () => {
		if (window.innerWidth < 1100) {
			setOpen(false);
		}
		else {
			setOpen(true);
		}
	};

	let classes = open ? 'nav' : 'nav show-nav';

	return (
		<header className="navbar-header">
			<nav className="navbar">
				<Link onClick={handleClick} to="/Shore-Resort/">
					<h1 className="navbar-brand">
						Shore <span className="resort">Resort</span>
					</h1>
				</Link>
				<ul className={classes}>
					<li>
						<NavLink onClick={handleClick} exact activeClassName="active" className="nav-link" to="/Shore-Resort/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink onClick={handleClick} exact activeClassName="active" className="nav-link" to="/Shore-Resort/view-rooms">
							Rooms
						</NavLink>
					</li>
					<li>
						<NavLink onClick={handleClick} exact activeClassName="active" className="nav-link" to="/Shore-Resort/contact">
							Contact Us
						</NavLink>
					</li>
				</ul>
			</nav>
			<HamburgerToggleButton click={handleClick} />
		</header>
	);
}
