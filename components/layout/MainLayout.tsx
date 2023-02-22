import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from 'components/Header/Header';
import JoinUs from 'components/JoinUs/JoinUs';
import PageHead from 'components/layout/PageHead';
import Footer from 'components/layout/Footer';

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
			<PageHead title={title} />
			<Header />

			<main className="mainContainer">{children}</main>

			<JoinUs />
			<Footer />
		</div>
	);
};

export default MainLayout;
