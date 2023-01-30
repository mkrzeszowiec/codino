import Linkify from 'react-linkify';
import { Product } from 'types/common';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import Image from 'next/image';
import CaseStudyInNutshell from 'components/CaseStudy/CaseStudyInNutshell';
import UseCasesCarousel from 'components/UseCasesCarousel/UseCasesCarousel';
import CaseStudyScopeOfWork from 'components/CaseStudy/CaseStudyScopeOfWork';
import CaseStudyGoals from 'components/CaseStudy/CaseStudyGoals';
import CaseStudyTechnologies from 'components/CaseStudy/CaseStudyTechnologies';

interface CaseStudyProps {
	product: Product;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ product }) => {
	const { slug } = product;
	return (
		<section className="caseStudy">
			<div className="container">
				<SectionTitle className="caseStudy__title">{product.title}</SectionTitle>

				<p className="caseStudy__description">
					<Linkify>{product.description}</Linkify>
				</p>

				<CaseStudyInNutshell product={product} />
			</div>

			<Image
				src={`/images/case-study/${slug}/banner.jpg`}
				className="caseStudy__banner"
				alt=""
				width={4000}
				height={500}
			/>

			<div className="container">
				<CaseStudyScopeOfWork product={product} />
				<CaseStudyGoals product={product} />
			</div>

			<CaseStudyTechnologies product={product} />
			<UseCasesCarousel />
		</section>
	);
};

export default CaseStudy;
