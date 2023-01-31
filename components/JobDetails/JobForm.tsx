import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { EMAIL_JS_JOB_FORM_TEMPLATE_ID, EMAIL_JS_SERVICE_ID, EMAIL_JS_USER_ID, STATE } from 'utils/constants';
import SubmitButton from 'components/SubmitButton/SubmitButton';
import { useTranslation } from 'next-i18next';
import FormAgreementTooltip from 'components/FormAgreementTooltip/FormAgreementTooltip';

interface JobFormProps {
	position: string;
}

const JobForm: React.FC<JobFormProps> = ({ position }) => {
	const { t } = useTranslation();
	const form = useRef();
	const [currentState, setState] = useState(STATE.NOTHING);

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			setState(STATE.LOADING);
			await emailjs.sendForm(EMAIL_JS_SERVICE_ID, EMAIL_JS_JOB_FORM_TEMPLATE_ID, form.current, EMAIL_JS_USER_ID);
			setState(STATE.SUCCESS);
		} catch {
			setState(STATE.ERROR);
		}
	};

	return (
		<div className="jobDetailsFormWrapper">
			<h2 className="jobDetailsFormWrapper__title">{t('components.career.formHeader')}</h2>
			<form className="jobDetailsForm" onSubmit={onSubmit} ref={form}>
				<div className="jobDetailsForm__nameWrapper">
					<div className="jobDetailsForm__name">
						<label className="jobDetailsForm__label" htmlFor="name">
							{t('common.name')}
						</label>
						<input id="name" className="jobDetailsForm__input" type="text" name="name" required />
					</div>

					<div className="jobDetailsForm__surname">
						<label className="jobDetailsForm__label" htmlFor="surname">
							{t('common.surname')}
						</label>
						<input className="jobDetailsForm__input" id="surname" type="text" required name="surname" />
					</div>
				</div>

				<label className="jobDetailsForm__label" htmlFor="email">
					{t('common.email')}
				</label>
				<input className="jobDetailsForm__input" id="email" type="email" name="email" required />

				<label className="jobDetailsForm__label" htmlFor="message">
					{t('common.message')}
				</label>
				<textarea
					className="jobDetailsForm__input jobDetailsForm__input--text-area"
					name="message"
					id="message"
					rows={5}
					cols={1}
					required
				/>

				<label className="jobDetailsForm__label" htmlFor="cv">
					{t('common.cvUrl')}
				</label>
				<input className="jobDetailsForm__input" id="cv" type="text" name="cv" required />

				<label className="jobDetailsForm__label jobDetailsForm__label--notRequired" htmlFor="github">
					{t('common.siteUrl')}
				</label>
				<input className="jobDetailsForm__input" id="github" type="text" name="github" />

				<input hidden id="position" type="text" name="position" value={position} />

				<div>
					<input id="agreement" type="checkbox" required name="agreement" />
					<label className="jobDetailsForm__checkBoxLabel" htmlFor="agreement">
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

export default JobForm;
