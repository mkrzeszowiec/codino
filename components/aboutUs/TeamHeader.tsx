import Image from 'next/image';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { useTranslation } from 'next-i18next';

const TeamHeader = () => {
	const { t } = useTranslation();

	return (
		<section className="teamHeader" data-aos="fade-up" data-aos-offset={100}>
			<div className="teamHeader__texts">
				<SectionTitle className="teamHeader__title">{t('components.team.header')}</SectionTitle>
				<p className="teamHeader__description">{t('components.team.headerDescription')}</p>
			</div>

			<div className="teamHeader__imageWrapper">
				<Image className="teamHeader__image" src={'/images/team.png'} width={1500} height={1500} alt="" />
			</div>
		</section>
	);
};

export default TeamHeader;
