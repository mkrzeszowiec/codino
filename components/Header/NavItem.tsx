import Link from 'next/link';
import { useRouter } from 'next/router';

const ROUTES = [
	{ name: 'Services', slug: 'services' },
	{ name: 'About Us', slug: 'about' },
	{ name: 'Case Study', slug: 'case-study' },
	{ name: 'Team', slug: 'team' },
	{ name: 'Career', slug: 'career' },
	{ name: 'Contact', slug: 'contact' }
];

const NavItem = () => {
	const router = useRouter();
	const getIsActive = (slug: string): boolean => router.pathname.includes(slug);

	return (
		<nav className="navigation">
			{ROUTES.map(route => (
				<Link
					aria-label={route.name}
					className={`navigation__link ${getIsActive(route.slug) ? 'navigation__link--active' : ''}`}
					href={`/${route.slug}`}
					key={route.slug}
				>
					{route.name}
				</Link>
			))}
		</nav>
	);
};

export default NavItem;
