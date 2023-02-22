import MainLayout from 'components/layout/MainLayout';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';
import { getPageTitle } from 'utils/utils';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import { useTranslation } from 'next-i18next';
import CookiesInfo from 'components/CookiesInfo/CookiesInfo';

const CookiesPolicyPage = () => {
	const { t } = useTranslation();

	return (
		<MainLayout title={getPageTitle(t('common.subpages.cookies-policy'))}>
			<div className="container">
				<SubpageIntro
					title="Polityka cookies"
					description="Poniższa Polityka Cookies określa zasady zapisywania i uzyskiwania dostępu do danych na Urządzeniach Użytkowników korzystających z Serwisu do celów świadczenia usług drogą elektroniczną przez Administratora Serwisu."
				/>
				<CookiesInfo />
			</div>
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
	}
});

export default CookiesPolicyPage;
