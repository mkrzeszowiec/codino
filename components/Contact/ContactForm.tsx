import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	console.log(errors);

	return (
		<div className="contactFormWrapper">
			<h2 className="contactFormWrapper__title">Jak możemy Ci pomóc?</h2>
			<form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
				<div className="contactForm__nameWrapper">
					<div className="contactForm__name">
						<label className="contactForm__label" htmlFor="name">
							Name
						</label>
						<input
							id="name"
							className="contactForm__input"
							type="text"
							{...register('Name', { required: true, maxLength: 80 })}
						/>
					</div>

					<div className="contactForm__surname">
						<label className="contactForm__label" htmlFor="surname">
							Surname
						</label>
						<input
							className="contactForm__input"
							id="surname"
							type="text"
							{...register('Surname', { required: true, maxLength: 100 })}
						/>
					</div>
				</div>

				<label className="contactForm__label" htmlFor="email">
					Email
				</label>
				<input
					className="contactForm__input"
					id="email"
					type="email"
					{...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
				/>

				<label className="contactForm__label" htmlFor="message">
					Message
				</label>
				<textarea
					className="contactForm__input contactForm__input--text-area"
					id="message"
					rows={5}
					cols={1}
					{...register('Message', { required: true })}
				/>

				<div>
					<input id="agreement" type="checkbox" {...register('agreement', { required: true })} />
					<label className="contactForm__checkBoxLabel" htmlFor="agreement">
						I accept{' '}
						<a className="highlighted-text" href="#">
							Contact Form Personal Data Processing Information
						</a>
					</label>
				</div>

				<button className="contactForm__submitButton" type="submit">
					Send
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
