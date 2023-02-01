import BuildIcon from 'components/icons/Build';
import HeartIcon from 'components/icons/Heart';
import CalendarIcon from 'components/icons/Calendar';
import { Product } from 'types/common';

const CaseStudyInNutshell = ({ product }: { product: Product }) => (
	<div className="caseStudyInNutshell">
		<div className="caseStudyInNutshell__point">
			<div className="caseStudyInNutshell__icon">
				<BuildIcon />
			</div>

			<p>{product.industry}</p>
		</div>

		<div className="caseStudyInNutshell__point">
			<div className="caseStudyInNutshell__icon">
				<HeartIcon />
			</div>

			<p>{product.scopeOfTechnology}</p>
		</div>

		<p className="caseStudyInNutshell__point">
			<div className="caseStudyInNutshell__icon">
				<CalendarIcon />
			</div>

			<p>{product.date}</p>
		</p>
	</div>
);

export default CaseStudyInNutshell;
