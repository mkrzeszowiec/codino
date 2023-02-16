import { useEffect } from 'react';
import AOS from 'aos';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import JoinUs from 'components/JoinUs/JoinUs';
import CookieBanner from 'components/CookieBanner/CookieBanner';
import { colors } from 'utils/colors';
import 'aos/dist/aos.css';

interface MainLayoutProps {
	title?: string;
	containerClassName?: string;
	children?: React.ReactNode;
}

const MainLayout = ({ children, title = 'Codino', containerClassName = '' }: MainLayoutProps) => {
	const { t } = useTranslation();

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className={containerClassName}>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={t('common.metadata.description')} />
				<meta name="theme-color" content={colors.primary} />
				<link rel="manifest" href="/manifest.json" />
				<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
			</Head>

			<Header />

			<main className={`mainContainer`}>{children}</main>

			<JoinUs />
			<Footer />
			<CookieBanner />
		</div>
	);
};

export default MainLayout;
