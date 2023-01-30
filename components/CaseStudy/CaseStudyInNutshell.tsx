import BuildIcon from 'components/icons/Build';
import HeartIcon from 'components/icons/Heart';
import CalendarIcon from 'components/icons/Calendar';
import { Product } from 'types/common';

const CaseStudyInNutshell = ({ product }: { product: Product }) => (
	<div className="caseStudyInNutshell">
		<p className="caseStudyInNutshell__point">
			<BuildIcon />
			{product.industry}
		</p>

		<p className="caseStudyInNutshell__point">
			<HeartIcon />
			{product.scopeOfTechnology}
		</p>

		<p className="caseStudyInNutshell__point">
			<CalendarIcon />
			{product.date}
		</p>
	</div>
);

export default CaseStudyInNutshell;
