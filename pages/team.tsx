import Main from 'layouts/MainLayout';
import TeamHeader from 'components/TeamHeader/TeamHeader';
import { getPageTitle } from 'utils/utils';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const TeamPage = () => (
	<Main title={getPageTitle('Title')}>
		<div className="container">
			<TeamHeader />
		</div>
	</Main>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['common']))
	}
});

export default TeamPage;
