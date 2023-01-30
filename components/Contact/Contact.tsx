import React from 'react';
import ContactForm from 'components/Contact/ContactForm';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { CONTACT_EMAIL, RECRUITMENT_EMAIL } from 'utils/constants';
import { useTranslation } from 'next-i18next';

const Contact = () => {
	const { t } = useTranslation();

	return (
		<section className="contact">
			<div className="contact__infoWrapper">
				<SectionTitle>{t('components.contact.header')}</SectionTitle>

				<p className="contact__description">{t('components.contact.description')}</p>

				<p className="contact__emailContact">{t('components.contact.urlTitle1')}</p>

				<a className="contact__url" href={`mailto:${CONTACT_EMAIL}`} target="_self">
					{CONTACT_EMAIL}
				</a>

				<p className="contact__recruitmentContact">{t('components.contact.urlTitle2')}</p>

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
