import Image from 'next/image';
import Header from 'components/Header/Header';
import PageHead from 'components/layout/PageHead';
import Button from 'components/Button/Button';
import { useTranslation } from 'next-i18next';

interface NotFoundLayoutProps {
	title: string;
	subtitle: string;
}

const ErrorPageLayout = ({ title, subtitle }: NotFoundLayoutProps) => {
	const { t } = useTranslation();

	return (
		<div className="errorPage container">
			<PageHead title={title} />
			<Header isErrorPage />

			<Image className="errorPage__image" src="/images/error.png" width={1500} height={1500} alt="" />

			<h2 className="errorPage__title">{title}</h2>
			<p className="errorPage__subtitle">{subtitle}</p>
			<Button label={t('components.errorPage.button')} href="/" />
		</div>
	);
};

export default ErrorPageLayout;
