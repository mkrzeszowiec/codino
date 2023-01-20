import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import { useRouter } from 'next/router';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import JoinUs from 'components/JoinUs/JoinUs';

type LayoutType = {
	title?: string;
	children?: React.ReactNode;
};

export default ({ children, title = 'Codino' }: LayoutType) => {
	const router = useRouter();
	const isHomePage = router.pathname == '/';

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="app-main">
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Header />

			<main className={`main-container ${isHomePage ? 'main-container--homepage' : ''} `}>{children}</main>

			<JoinUs />
			<Footer />
		</div>
	);
};
