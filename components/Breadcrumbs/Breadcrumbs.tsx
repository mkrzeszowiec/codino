import Link from 'next/link';
import { useTranslation } from 'next-i18next';

interface BreadcrumbsProps {
	currentPage: string;
	type: 'caseStudy' | 'career' | 'blog';
	className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, type, className }) => {
	const { t } = useTranslation();

	const getHref = () => (type == 'caseStudy' ? 'case-study' : type);

	return (
		<nav aria-label="breadcrumbs" className={`breadcrumbs ${className}`}>
			<Link aria-label="Go to homepage" className="breadcrumbs__url" href="/">
				{t('common.homepage')}
			</Link>

			<span className="breadcrumbs__separator"> / </span>

			<Link aria-label={`Go to ${type}`} className="breadcrumbs__url" href={`/${getHref()}`}>
				{t(`common.subpages.${type}`)}
			</Link>

			<span className="breadcrumbs__separator"> / </span>

			<span className="breadcrumbs__currentPage">{currentPage}</span>
		</nav>
	);
};

export default Breadcrumbs;
