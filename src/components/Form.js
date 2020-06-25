import React, { useState } from 'react';
import './Form.css';

export default function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [result, setResult] = useState('');

	const handleChange = event => {
		let inputName = event.target.name;
		let value = event.target.value;

		switch (inputName) {
			case 'name':
				setName(value);
				break;

			case 'email':
				setEmail(value);
				break;

			case 'subject':
				setSubject(value);
				break;

			case 'message':
				setMessage(value);
				break;

			default:
				console.log('Unknown parameter');
				break;
		}
	};

	const handleClick = event => {
		event.preventDefault();
		const url = 'https://jsonplaceholder.typicode.com/posts';

		const data = {
			name    : name,
			email   : email,
			subject : subject,
			message : message
		};

		fetch(url, {
			method  : 'POST',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify(data)
		})
			.then(response => response.json())
			.then(document.querySelectorAll('.contact-form-input').forEach(item => (item.value = '')))
			.then(() => setResult('Thank you, your message has been sent!'))
			.catch(() => setResult('Error!'));
	};

	return (
		<section className="form-grid">
			<div className="form-container">
				<h1>Contact us</h1>
				<p>{result}</p>
				<form className="form" onSubmit={handleClick}>
					<div className="name-email-container">
						<label htmlFor="name" className="form-label">
							FULL NAME
						</label>
						<label htmlFor="email" className="form-label">
							EMAIL ADDRESS
						</label>
						<div>
							<input
								className="contact-form-input"
								type="text"
								name="name"
								id="name"
								placeholder="Name"
								required
								onChange={handleChange}
							/>​
						</div>
						<div>
							<input
								className="contact-form-input"
								type="email"
								name="email"
								id="email"
								placeholder="Email"
								required
								onChange={handleChange}
							/>​
						</div>
					</div>
					<label htmlFor="subject" className="form-label form-label-message">
						SUBJECT
					</label>
					<div>
						<input
							className="contact-form-input contact-form-subject"
							type="text"
							name="subject"
							id="subject"
							placeholder="Subject"
							required
							onChange={handleChange}
						/>​
					</div>
					<label htmlFor="message" className="form-label form-label-message">
						MESSAGE
					</label>
					<div>
						<textarea
							className="contact-form-input contact-form-subject"
							name="message"
							id="message"
							placeholder="Message"
							rows="10"
							required
							onChange={handleChange}
						/>​
					</div>
					<input className="contact-form-button" type="submit" value="Send message" />
				</form>
			</div>
			<img className="form-img" src="/Shore-Resort/images/defaultBcg.jpeg" alt="" />
		</section>
	);
}
