import SectionTitle from 'components/SectionTitle/SectionTitle';
import { Product } from 'types/common';
import BuildIcon from 'components/icons/Build';

const CaseStudyScopeOfWork = ({ product }: { product: Product }) => {
	const { scopeOfWork } = product;

	if (!scopeOfWork) return null;

	return (
		<section className="caseStudyScopeOfWork">
			<SectionTitle className="caseStudyScopeOfWork__title">Zakres prac</SectionTitle>
			<p className="caseStudyScopeOfWork__description">{scopeOfWork.description}</p>

			<ul className="caseStudyScopeOfWork__list">
				{scopeOfWork.points.map(point => (
					<li key={point.index} className="caseStudyScopeOfWork__listItem">
						<BuildIcon />
						{point.title && <h5 className="caseStudyScopeOfWork__listTitle">{point.title}</h5>}
						<p className="caseStudyScopeOfWork__listDescription">{point.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default CaseStudyScopeOfWork;
