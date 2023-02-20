import Linkify from 'react-linkify';
import { Product } from 'types/common';

const CaseStudyDescription = ({ product }: { product: Product }) => (
	<div className="caseStudyDescription">
		<p>
			<Linkify>{product.description}</Linkify>
		</p>

		{product.expandedDescription && (
			<div className="caseStudyDescription__expanded">
				<Linkify>
					<p>{product.expandedDescription.description}</p>
				</Linkify>

				<ul className="caseStudyDescription__list">
					{product.expandedDescription.points.map((point, index) => (
						<li key={index} className="caseStudyDescription__listItem">
							{point}
						</li>
					))}
				</ul>
			</div>
		)}
	</div>
);

export default CaseStudyDescription;
