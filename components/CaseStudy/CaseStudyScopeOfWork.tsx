import SectionTitle from 'components/SectionTitle/SectionTitle';
import { Product } from 'types/common';
import { Trans, useTranslation } from 'next-i18next';

const CaseStudyScopeOfWork = ({ product }: { product: Product }) => {
	const { t } = useTranslation();
	const { scopeOfWork } = product;

	if (!scopeOfWork) return null;

	return (
		<section className="caseStudyScopeOfWork" data-aos="fade-down">
			<SectionTitle className="caseStudyScopeOfWork__title">{t('components.caseStudy.scope')}</SectionTitle>
			<p className="caseStudyScopeOfWork__description">{scopeOfWork.description}</p>

			<ul className="caseStudyScopeOfWork__list">
				{scopeOfWork.points.map(point => (
					<li key={point.index} className="caseStudyScopeOfWork__listItem">
						<p className="caseStudyScopeOfWork__listDescription">
							<Trans> {point.description}</Trans>
						</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default CaseStudyScopeOfWork;
