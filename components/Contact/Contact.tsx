import React from 'react';
import ContactForm from 'components/Contact/ContactForm';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { CONTACT_EMAIL, RECRUITMENT_EMAIL } from 'utils/constants';

const Contact = () => {
	return (
		<section className="contact">
			<div className="contact__infoWrapper">
				<SectionTitle>Skontaktuj się</SectionTitle>

				<p className="contact__description">
					Nasz zespół jest tutaj, aby pomóc Ci wybrać odpowiednie usługi tellus sed ultrices sodales, nisl orci euismod
					tortor, non maximus erat libero eu mi. Donec in congue justo. Donec ac lobortis mi.
				</p>

				<p className="contact__emailContact">Dołącz do nas</p>

				<a className="contact__url" href={`mailto:${CONTACT_EMAIL}`} target="_self">
					{CONTACT_EMAIL}
				</a>

				<p className="contact__recruitmentContact">Współpraca</p>

				<a className="contact__url" href={`mailto:${RECRUITMENT_EMAIL}`} target="_self">
					{RECRUITMENT_EMAIL}
				</a>
			</div>

			<div className="contact__form">
				<ContactForm />
			</div>
		</section>
	);
};

export default Contact;
