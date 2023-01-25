import Main from 'layouts/MainLayout';
import Map from 'components/Map/Map';
import Contact from 'components/Contact/Contact';
import { getPageTitle } from 'utils/utils';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ContactPage = () => (
	<Main containerClassName="contactPage" title={getPageTitle('Contact')}>
		<div className="container">
			<Contact />
		</div>

		<Map />
	</Main>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['common']))
	}
});

export default ContactPage;
