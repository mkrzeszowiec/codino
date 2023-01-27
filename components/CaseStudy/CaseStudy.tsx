import { Product } from 'types/common';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import BuildIcon from 'components/icons/Build';
import HeartIcon from 'components/icons/Heart';
import CalendarIcon from 'components/icons/Calendar';
import Image from 'next/image';

interface CaseStudyProps {
	product: Product;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ product }) => {
	const { industry, date, scope, slug } = product;
	return (
		<section className="caseStudy">
			<div className="container">
				<SectionTitle className="caseStudy__title">{product.title}</SectionTitle>

				<p className="caseStudy__description">{product.description}</p>

				<div className="caseStudy__inNutshell">
					<p className="caseStudy__inNutshellPoint">
						<BuildIcon />
						{industry}
					</p>

					<p className="caseStudy__inNutshellPoint">
						<HeartIcon />
						{scope}
					</p>

					<p className="caseStudy__inNutshellPoint">
						<CalendarIcon />
						{date}
					</p>
				</div>
			</div>

			<Image
				src={`/images/case-study/${slug}/banner.jpg`}
				className="caseStudy__banner"
				alt=""
				width={2000}
				height={2000}
			/>
		</section>
	);
};

export default CaseStudy;
