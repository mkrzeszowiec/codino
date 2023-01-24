import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { EMAIL_JS_CONTACT_FORM_TEMPLATE_ID, EMAIL_JS_SERVICE_ID, EMAIL_JS_USER_ID } from 'utils/constants';

const ContactForm = () => {
	const form = useRef();

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		emailjs.sendForm(EMAIL_JS_SERVICE_ID, EMAIL_JS_CONTACT_FORM_TEMPLATE_ID, form.current, EMAIL_JS_USER_ID).then(
			result => {
				//todo
				console.log('ok', result.text);
			},
			error => {
				//todo
				console.log('error', error.text);
			}
		);
	};

	return (
		<div className="contactFormWrapper">
			<h2 className="contactFormWrapper__title">Jak możemy Ci pomóc?</h2>
			<form className="contactForm" onSubmit={onSubmit} ref={form}>
				<div className="contactForm__nameWrapper">
					<div className="contactForm__name">
						<label className="contactForm__label" htmlFor="name">
							Imię
						</label>
						<input className="contactForm__input" required id="name" name="name" type="text" />
					</div>

					<div className="contactForm__surname">
						<label className="contactForm__label" htmlFor="surname">
							Nazwisko
						</label>
						<input className="contactForm__input" required id="surname" name="surname" type="text" />
					</div>
				</div>

				<label className="contactForm__label" htmlFor="email">
					Email
				</label>
				<input className="contactForm__input" required id="email" name="email" type="email" />

				<label className="contactForm__label" htmlFor="message">
					Wiadomość
				</label>
				<textarea
					className="contactForm__input contactForm__input--text-area"
					required
					name="message"
					id="message"
					rows={5}
					cols={1}
				/>

				<div>
					<input required id="agreement" type="checkbox" name="agreement" />
					<label className="contactForm__checkBoxLabel" htmlFor="agreement">
						Akceptuje{' '}
						<a className="highlighted-text" href="#">
							jakiś regulamin todo
						</a>
					</label>
				</div>

				<button className="contactForm__submitButton" type="submit">
					Wyślij
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
