import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { useEffect } from 'react';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import JoinUs from 'components/JoinUs/JoinUs';

interface MainLayoutProps {
	title?: string;
	containerClassName?: string;
	children?: React.ReactNode;
}

const MainLayout = ({ children, title = 'Codino', containerClassName = '' }: MainLayoutProps) => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className={containerClassName}>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<Header />

			<main className={`mainContainer`}>{children}</main>

			<JoinUs />
			<Footer />
		</div>
	);
};

export default MainLayout;