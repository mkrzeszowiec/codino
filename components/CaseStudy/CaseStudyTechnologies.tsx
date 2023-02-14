import { useMemo } from 'react';
import Image from 'next/image';
import { Product } from 'types/common';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { useTranslation } from 'next-i18next';
import { allTechnologyLogos } from 'components/TechnologiesCarousel/allTechnologyLogos';

const CaseStudyTechnologies = ({ product }: { product: Product }) => {
	const { t } = useTranslation();
	const { technologies } = product;

	const visibleTechnologies = useMemo(
		() => allTechnologyLogos.filter(logo => technologies.some(technology => logo.src.includes(technology))),
		[technologies]
	);

	return (
		<div className="caseStudyTechnologies" data-aos="fade-down">
			<SectionTitle className="caseStudyTechnologies__title">{t('components.caseStudy.technologies')}</SectionTitle>

			<div className="caseStudyTechnologies__list">
				{visibleTechnologies.map(logo => (
					<div key={logo.src} className="caseStudyTechnologies__listItem">
						<Image className="caseStudyTechnologies__logo" src={logo.src} width={250} height={100} alt="" />
					</div>
				))}
			</div>
		</div>
	);
};

export default CaseStudyTechnologies;
