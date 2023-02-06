import Linkify from 'react-linkify';
import { Product } from 'types/common';
import Image from 'next/image';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import CaseStudyInNutshell from 'components/CaseStudy/CaseStudyInNutshell';
import UseCasesCarousel from 'components/UseCasesCarousel/UseCasesCarousel';
import CaseStudyScopeOfWork from 'components/CaseStudy/CaseStudyScopeOfWork';
import CaseStudyGoals from 'components/CaseStudy/CaseStudyGoals';
import CaseStudyTechnologies from 'components/CaseStudy/CaseStudyTechnologies';
import CaseStudySolutions from 'components/CaseStudy/CaseStudySolutions';
import CaseStudyMap from 'components/CaseStudy/CaseStudyMap';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';

interface CaseStudyProps {
	product: Product;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ product }) => (
	<section className="caseStudy">
		<div className="container">
			<Breadcrumbs currentPage={product.title} type="caseStudy" />

			<SectionTitle className="caseStudy__title">{product.title}</SectionTitle>

			<p className="caseStudy__description">
				<Linkify>{product.description}</Linkify>
			</p>

			<CaseStudyInNutshell product={product} />
		</div>

		<Image
			src={`/images/case-study/${product.slug}/banner.jpg`}
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

		<div className="container">
			<CaseStudyMap selectedCountry={product.countries} />
			<CaseStudySolutions product={product} />
		</div>

		<UseCasesCarousel />
	</section>
);

export default CaseStudy;
