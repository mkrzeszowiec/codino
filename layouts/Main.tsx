import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

type LayoutType = {
	title?: string;
	children?: React.ReactNode;
};

export default ({ children, title = 'Codino' }: LayoutType) => {
	const router = useRouter();
	const isHomePage = router.pathname == '/';

	return (
		<div className='app-main'>
			<Head>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>

			<Header />

			<main className={`main-container ${isHomePage ? 'main-container--homepage' : ''} `}>{children}</main>

			<Footer />
		</div>
	);
};
