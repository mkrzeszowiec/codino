import Image from 'next/image';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { useTranslation } from 'next-i18next';

const CareerHeader = () => {
	const { t } = useTranslation();

	return (
		<section className="careerHeader">
			<div className="careerHeader__texts">
				<SectionTitle className="careerHeader__title">{t('components.career.header')}</SectionTitle>
				<p className="careerHeader__description">
					{t('components.career.headerDescription')}
				</p>
			</div>

			<div className="careerHeader__imageWrapper">
				<Image className="careerHeader__image" src={'/images/career.png'} width={1500} height={1500} alt="" />
			</div>
		</section>
	);
};

export default CareerHeader;
