import { Product } from 'types/common';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';
import { useTranslation } from 'next-i18next';

const CaseStudyTechnologies = ({ product }: { product: Product }) => {
	const { t } = useTranslation();

	return (
		<div className="caseStudyTechnologies">
			<SectionTitle className="caseStudyTechnologies__title">{t('components.caseStudy.technologies')}</SectionTitle>
			<TechnologiesCarousel technologies={product.technologies} />
		</div>
	);
};

export default CaseStudyTechnologies;
