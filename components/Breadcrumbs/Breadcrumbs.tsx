import Link from 'next/link';
import { useTranslation } from 'next-i18next';

interface BreadcrumbsProps {
	currentPage: string;
	type: 'caseStudy' | 'carrer';
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, type }) => {
	const { t } = useTranslation();

	return (
		<nav aria-label="breadcrumbs" className="breadcrumbs">
			<Link aria-label="Go to homepage" className="breadcrumbs__url" href="/">
				{t('common.homepage')}
			</Link>

			<span className="breadcrumbs__separator"> → </span>

			<Link aria-label={`Go to ${type}`} className="breadcrumbs__url" href={type === 'caseStudy' ? '/case-study' : '/career'}>
				{t(type === 'caseStudy' ? 'common.subpages.caseStudy' : 'common.subpages.career')}
			</Link>

			<span className="breadcrumbs__separator"> → </span>

			<span className="breadcrumbs__currentPage">{currentPage}</span>
		</nav>
	);
};

export default Breadcrumbs;
