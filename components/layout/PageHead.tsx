import Head from 'next/head';
import { colors } from 'utils/colors';
import { useTranslation } from 'next-i18next';

interface HeadProps {
	title: string;
}
const PageHead: React.FC<HeadProps> = ({ title }) => {
	const { t } = useTranslation();

	return (
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="description" content={t('common.metadata.description')} />
			<meta name="theme-color" content={colors.primary} />
			<meta name="google-site-verification" content="WQtsQTJg0DniKhERMOBXPOVamvWLjlgQdeHOBAtVHcY" />
			<link rel="manifest" href="/manifest.json" />
			<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
		</Head>
	);
};

export default PageHead;
