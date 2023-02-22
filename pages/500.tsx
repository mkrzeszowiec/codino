import ErrorPageLayout from 'components/layout/ErrorPageLayout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import { useTranslation } from 'next-i18next';

const ServerErrorPage = () => {
	const { t } = useTranslation();

	return (
		<ErrorPageLayout
			title={t('components.errorPage.serverErrorTitle')}
			subtitle={t('components.errorPage.serverErrorSubtitle')}
		/>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
	}
});

export default ServerErrorPage;
