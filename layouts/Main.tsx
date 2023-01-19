import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/header/Header';

type LayoutType = {
	title?: string;
	children?: React.ReactNode;
};

export default ({ children, title = 'Codino' }: LayoutType) => {
	const router = useRouter();
	const pathname = router.pathname;
	const isHomePage = pathname == '/';

	return (
		<div className="app-main">
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Header />

			<main className={!isHomePage ? 'main-page' : ''}>{children}</main>
		</div>
	);
};
