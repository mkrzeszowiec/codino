import SectionTitle from 'components/SectionTitle/SectionTitle';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { FaHandHoldingHeart, FaHandsHelping, FaLightbulb } from 'react-icons/fa';
import { SiHandshake } from 'react-icons/si';
import { BsPersonLinesFill } from 'react-icons/bs';
import { GiProgression } from 'react-icons/gi';

const CompanyValues = () => {
	const { t } = useTranslation();

	return (
		<section className="companyValues" data-aos="fade-down">
			<div className="companyValues__top">
				<div className="companyValues__texts">
					<SectionTitle>{t('components.companyValues.title')}</SectionTitle>
					<p className="companyValues__description">{t('components.companyValues.description')}</p>
				</div>

				<div className="companyValues__imageWrapper">
					<Image className="companyValues__image" src="/images/team2.png" alt="" width={600} height={600} />
				</div>
			</div>

			<ul className="companyValues__list">
				<li className="companyValues__listItem">
					<FaLightbulb className="companyValues__icon" />

					<h5 className="companyValues__listTitle">{t('components.companyValues.innovationTitle')}</h5>
					<p className="companyValues__listDescription">{t('components.companyValues.innovationDescription')}</p>
				</li>

				<li className="companyValues__listItem">
					<BsPersonLinesFill className="companyValues__icon" />
					<h5 className="companyValues__listTitle">{t('components.companyValues.responsibilityTitle')}</h5>
					<p className="companyValues__listDescription">{t('components.companyValues.responsibilityDescription')}</p>
				</li>

				<li className="companyValues__listItem">
					<GiProgression className="companyValues__icon" />
					<h5 className="companyValues__listTitle">{t('components.companyValues.employeeDevelopmentTitle')}</h5>
					<p className="companyValues__listDescription">
						{t('components.companyValues.employeeDevelopmentDescription')}
					</p>
				</li>

				<li className="companyValues__listItem">
					<FaHandsHelping className="companyValues__icon" />
					<h5 className="companyValues__listTitle">{t('components.companyValues.supportTitle')}</h5>
					<p className="companyValues__listDescription">{t('components.companyValues.supportDescription')}</p>
				</li>

				<li className="companyValues__listItem">
					<SiHandshake className="companyValues__icon" />
					<h5 className="companyValues__listTitle">{t('components.companyValues.respectTitle')}</h5>
					<p className="companyValues__listDescription">{t('components.companyValues.respectDescription')}</p>
				</li>

				<li className="companyValues__listItem">
					<FaHandHoldingHeart className="companyValues__icon" />

					<h5 className="companyValues__listTitle">{t('components.companyValues.integrityTitle')}</h5>
					<p className="companyValues__listDescription">{t('components.companyValues.integrityDescription')}</p>
				</li>
			</ul>
		</section>
	);
};

export default CompanyValues;
