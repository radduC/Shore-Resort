import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
	return (
		<footer className="footer-container">
			<div className="footer">
				<div className="footer-logo">
					<h1>
						Shore<span className="footer-resort"> Resort</span>
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur sequi officiis quidem
						voluptatum minima ut modi excepturi reprehenderit accusantium ducimus aperiam ea quasi fuga vel,
						libero eaque, minus tempora.
					</p>
					<p className="socialMedia-icons">
						<Link to="">
							<i className="fab fa-twitter socialmedia" />
						</Link>
						<Link to="">
							<i className="fab fa-facebook socialmedia" />
						</Link>
						<Link to="">
							<i className="fab fa-instagram socialmedia" />
						</Link>
					</p>
				</div>

				<ul className="footer-nav">
					<h3>Services</h3>
					<li>
						<i className="fas fa-angle-right footer-nav-icon" />
						<Link to="" className="footer-link">
							All inclusive
						</Link>
					</li>
					<li>
						<i className="fas fa-angle-right footer-nav-icon" />
						<Link to="" className="footer-link">
							Rooms for pets
						</Link>
					</li>
					<li>
						<i className="fas fa-angle-right footer-nav-icon" />
						<Link to="" className="footer-link">
							Massage
						</Link>
					</li>
					<li>
						<i className="fas fa-angle-right footer-nav-icon" />
						<Link to="" className="footer-link">
							Indoor and outdoor activities
						</Link>
					</li>
					<li>
						<i className="fas fa-angle-right footer-nav-icon" />
						<Link to="" className="footer-link">
							Car rental
						</Link>
					</li>
				</ul>

				<div className="footer-contact">
					<h3>Contact Information</h3>
					<p>
						<i className="fas fa-map-marker-alt footer-resort" /> San Francisco, California, USA
					</p>
					<p>
						<i className="fas fa-phone-alt footer-resort" /> +2 392 3929 210
					</p>
					<p>
						<i className="fas fa-envelope footer-resort" /> info@yourdomain.com
					</p>
				</div>

				<div className="footer-business-hours">
					<h3>Business Hours:</h3>
					<h4 className="footer-h4">Opening Days:</h4>
					<p>Monday – Friday : 9 to 20 </p>
					<p>Saturday : 9 to 17 </p>
					<h4 className="footer-h4">Vacations:</h4>
					<p>All Sunday Days / All Official Holidays</p>
				</div>
			</div>
			<p style={{ textAlign: 'center', paddingBottom: '30px' }}>
				Copyright &copy;{new Date().getFullYear()} All rights reserved | Radu
			</p>
		</footer>
	);
}
