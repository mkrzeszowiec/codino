import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { getCamelCased } from 'utils/utils';

const ROUTES = ['services', 'about', 'case-study', 'career', 'contact'];

const NavItem = () => {
	const router = useRouter();
	const { t } = useTranslation();

	const getIsActive = (slug: string): boolean => router.pathname.includes(slug);
	// @ts-ignore
	const getTranslateKey = (route: string): any => `common.subpages.${getCamelCased(route)}`;

	return (
		<nav className="navigation">
			{ROUTES.map(route => (
				<Link
					aria-label={route}
					className={`navigation__link ${getIsActive(route) ? 'navigation__link--active' : ''}`}
					href={`/${route}`}
					key={route}
				>
					{t(getTranslateKey(route))}
				</Link>
			))}
		</nav>
	);
};

export default NavItem;
