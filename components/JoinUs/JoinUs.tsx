import Button from 'components/Button/Button';
import { useTranslation } from 'next-i18next';

const JoinUs = () => {
	const { t } = useTranslation();

	return (
		<section className="joinUs">
			<h3 className="joinUs__title">{t('components.joinUs.header')}</h3>

			<p className="joinUs__description">{t('components.joinUs.description')}</p>

			<Button className="joinUs__button" label={t('common.getHired')} href="/career" />
		</section>
	);
};

export default JoinUs;
