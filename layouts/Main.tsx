import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import JoinUs from 'components/JoinUs/JoinUs';
import { getIsHomePage } from 'utils/utils';

interface MainLayoutProps {
	title?: string;
	children?: React.ReactNode;
}

const MainLayout = ({ children, title = 'Codino' }: MainLayoutProps) => {
	const router = useRouter();

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

			<main className={`main-container ${getIsHomePage(router.pathname) ? 'main-container--homepage' : ''} `}>
				{children}
			</main>

			<JoinUs />
			<Footer />
		</div>
	);
};

export default MainLayout;
