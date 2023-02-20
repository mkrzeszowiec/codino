import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import SubmitButton from 'components/SubmitButton/SubmitButton';
import { STATE } from 'utils/constants';
import { useTranslation } from 'next-i18next';
import FormAgreementTooltip from 'components/FormAgreementTooltip/FormAgreementTooltip';
import { event as googleEvent } from 'nextjs-google-analytics';

const ContactForm = () => {
	const { t } = useTranslation();
	const form = useRef();
	const [currentState, setState] = useState(STATE.NOTHING);

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			setState(STATE.LOADING);
			await emailjs.sendForm(
				process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAIL_JS_CONTACT_FORM_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID
			);
			setState(STATE.SUCCESS);

			googleEvent('success_submit_contact_form', {
				category: 'Contact'
			});
		} catch (error) {
			setState(STATE.ERROR);

			googleEvent('error_submit_contact_form', {
				category: 'Contact',
				value: error
			});
		}
	};

	return (
		<div className="contactFormWrapper">
			<h2 className="contactFormWrapper__title">{t('components.contact.formHeader')}</h2>
			<form id={'contactForm'} className="contactForm" onSubmit={onSubmit} ref={form}>
				<div className="contactForm__nameWrapper">
					<div className="contactForm__name">
						<label className="contactForm__label" htmlFor="name">
							{t('common.name')}
						</label>
						<input className="contactForm__input" required id="name" name="name" type="text" />
					</div>

					<div className="contactForm__surname">
						<label className="contactForm__label" htmlFor="surname">
							{t('common.surname')}
						</label>
						<input className="contactForm__input" required id="surname" name="surname" type="text" />
					</div>
				</div>

				<label className="contactForm__label" htmlFor="email">
					{t('common.email')}
				</label>
				<input className="contactForm__input" required id="email" name="email" type="email" />

				<label className="contactForm__label" htmlFor="message">
					{t('common.message')}
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
						{t('common.agreementAccept1')}
						<span id="form-agreement"> {t('common.agreementAccept2')}</span>
					</label>
					<FormAgreementTooltip targetId="form-agreement" />
				</div>

				<SubmitButton state={currentState} />
			</form>
		</div>
	);
};

export default ContactForm;
