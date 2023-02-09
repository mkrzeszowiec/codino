import Image from 'next/image';
import Button from 'components/Button/Button';
import { useTranslation } from 'next-i18next';

const MeetCodino = () => {
	const { t } = useTranslation();

	return (
		<section className="meetCodino" data-aos="fade-down">
			<Image
				className="meetCodino__image meetCodino__image--first"
				src="/images/about-us-1.png"
				width={500}
				height={500}
				alt=""
			/>

			<div className="meetCodino__infoWrapper">
				<h3 className="meetCodino__title">{t('components.meetCodino.header')}</h3>
				<p className="meetCodino__description">{t('components.meetCodino.description')}</p>
				<Button label={t('common.getHired')} href="/career" />
			</div>

			<Image
				className="meetCodino__image meetCodino__image--second"
				src="/images/about-us-2.png"
				width={500}
				height={500}
				alt=""
			/>
		</section>
	);
};

export default MeetCodino;
