import Head from 'next/head';
import Header from 'components/Header/Header';

interface NotFoundLayoutProps {
	title?: string;
	children?: React.ReactNode;
}

const NotFoundLayout = ({ children, title = 'Codino 404' }: NotFoundLayoutProps) => (
	<div className="app-main">
		<Head>
			<title>Page not found &mdash; {title}</title>
		</Head>

		<Header isErrorPage />

		<main>{children}</main>
	</div>
);

export default NotFoundLayout;
