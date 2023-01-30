import { Product } from 'types/common';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';

const CaseStudyTechnologies = ({ product }: { product: Product }) => (
	<div className="caseStudyGoals">
		<SectionTitle className="caseStudyGoals__technologies">Wykorzystane technologie</SectionTitle>
		<TechnologiesCarousel technologies={product.technologies} />
	</div>
);

export default CaseStudyTechnologies;
