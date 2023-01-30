import { Product } from 'types/common';
import SectionTitle from 'components/SectionTitle/SectionTitle';

const CaseStudyGoals = ({ product }: { product: Product }) => {
	return (
		<div className="caseStudyGoals">
			<SectionTitle className="caseStudyGoals__title">Wyzwania & cele projektu</SectionTitle>
			<p className="caseStudyGoals__description">{product.goals ?? '-'}</p>
		</div>
	);
};

export default CaseStudyGoals;
