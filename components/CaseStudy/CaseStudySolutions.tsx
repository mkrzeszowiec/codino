import { Product } from 'types/common';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import Image from 'next/image';

const CaseStudySolutions = ({ product }: { product: Product }) => (
	<div className="caseStudySolutionWrapper">
		{product.solutions.map(solution => (
			<div className="caseStudySolution" key={solution.title}>
				<div className="caseStudySolution__infoWrapper">
					{solution.title && <SectionTitle className="caseStudySolution__title">{solution.title}</SectionTitle>}
					<p className="caseStudySolution__description">{solution.description}</p>
				</div>

				<div className="caseStudySolution__imageWrapper">
					<Image className="caseStudySolution__image" src={solution.imageSrc} width={900} height={900} alt="" />
				</div>
			</div>
		))}
	</div>
);

export default CaseStudySolutions;
