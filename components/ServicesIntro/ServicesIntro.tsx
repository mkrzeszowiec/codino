import Button from 'components/Button/Button';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const ServicesIntro = () => {
	const { t } = useTranslation();

	return (
		<section className="servicesIntro">
			<div className="servicesIntro__infoWrapper">
				<SectionTitle className="servicesIntro__title">{t('components.services.header')}</SectionTitle>
				<p className="servicesIntro__description">{t('components.services.description')}</p>
				<Button label={t('common.contact')} type="border-black" href="/contact" />
			</div>

			<div className="servicesIntro__imageWrapper">
				<Image className="servicesIntro__image" src="/images/services.png" width={1500} height={1500} alt="" />
			</div>
		</section>
	);
};

export default ServicesIntro;
