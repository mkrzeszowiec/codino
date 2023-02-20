import Linkify from 'react-linkify';
import { Product } from 'types/common';

const CaseStudyDescription = ({ product }: { product: Product }) => (
	<p className="caseStudyDescription">
		<Linkify>{product.description}</Linkify>
	</p>
);

export default CaseStudyDescription;
