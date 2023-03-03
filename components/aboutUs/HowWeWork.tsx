import SectionTitle from 'components/SectionTitle/SectionTitle';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { SiSpeedtest } from 'react-icons/si';
import { RiMessageLine, RiToolsFill } from 'react-icons/ri';
import { MdOutlineFormatListBulleted } from 'react-icons/md';

const HowWeWork = () => {
	const { t } = useTranslation();

	return (
		<section className="howWeWork" data-aos="fade-up" data-aos-offset={-200}>
			<div className="howWeWork__top">
				<div className="howWeWork__texts">
					<SectionTitle>{t('components.howWeWork.title')}</SectionTitle>
					<p className="howWeWork__description">{t('components.howWeWork.description')}</p>
				</div>

				<div className="howWeWork__imageWrapper">
					<Image className="howWeWork__image" src="/images/values.png" alt="" width={1500} height={1500} />
				</div>
			</div>

			<ul className="howWeWork__list">
				<li className="howWeWork__listItem">
					<div className="howWeWork__iconWrapper">
						<MdOutlineFormatListBulleted className="howWeWork__icon" />
					</div>
					<h5 className="howWeWork__listTitle">{t('components.howWeWork.firstStep')}</h5>
				</li>

				<li className="howWeWork__listItem">
					<div className="howWeWork__iconWrapper">
						<RiToolsFill className="howWeWork__icon" />
					</div>
					<h5 className="howWeWork__listTitle">{t('components.howWeWork.secondStep')}</h5>
				</li>

				<li className="howWeWork__listItem">
					<div className="howWeWork__iconWrapper">
						<SiSpeedtest className="howWeWork__icon" />
					</div>
					<h5 className="howWeWork__listTitle">{t('components.howWeWork.thirdStep')}</h5>
				</li>

				<li className="howWeWork__listItem">
					<div className="howWeWork__iconWrapper">
						<RiMessageLine className="howWeWork__icon" />
					</div>
					<h5 className="howWeWork__listTitle">{t('components.howWeWork.fourthStep')}</h5>
				</li>
			</ul>
		</section>
	);
};

export default HowWeWork;
