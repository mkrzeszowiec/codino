import Main from 'layouts/MainLayout';
import Map from 'components/Map/Map';
import Contact from 'components/Contact/Contact';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getPageTitle } from 'utils/utils';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import { useTranslation } from 'next-i18next';

const ContactPage = () => {
	const { t } = useTranslation();

	return (
		<Main containerClassName="contactPage" title={getPageTitle(t('common.subpages.contact'))}>
			<div className="container">
				<Contact />
			</div>

			<Map />
		</Main>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
	}
});

export default ContactPage;
