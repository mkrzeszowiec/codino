import Linkify from 'react-linkify';
import { Product } from 'types/common';
import Image from 'next/image';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import UseCasesCarousel from 'components/UseCasesCarousel/UseCasesCarousel';
import CaseStudyScopeOfWork from 'components/CaseStudy/CaseStudyScopeOfWork';
import CaseStudyTechnologies from 'components/CaseStudy/CaseStudyTechnologies';
import CaseStudyMap from 'components/CaseStudy/CaseStudyMap';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import { useTranslation } from 'next-i18next';

interface CaseStudyProps {
	product: Product;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ product }) => {
	const { t } = useTranslation();

	return (
		<section className="caseStudy">
			<div className="container">
				<Breadcrumbs currentPage={product.title} type="caseStudy" />

				<SectionTitle className="caseStudy__title">{product.title}</SectionTitle>

				<p className="caseStudy__description">
					<Linkify>{product.description}</Linkify>
				</p>
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
				<CaseStudyTechnologies product={product} />
				<CaseStudyMap product={product} />
			</div>

			<UseCasesCarousel title={t('components.caseStudy.showOther')} />
		</section>
	);
};

export default CaseStudy;
