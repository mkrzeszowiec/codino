import { Product } from 'types/common';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { useTranslation } from 'next-i18next';

const CaseStudyGoals = ({ product }: { product: Product }) => {
	const { t } = useTranslation();

	if (!product.goals) return null;

	return (
		<div className="caseStudyGoals" data-aos="fade-down">
			<SectionTitle className="caseStudyGoals__title">{t('components.caseStudy.goals')}</SectionTitle>
			<p className="caseStudyGoals__description">{product.goals}</p>
		</div>
	);
};

export default CaseStudyGoals;
