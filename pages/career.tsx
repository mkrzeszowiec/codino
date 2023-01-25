import Main from 'layouts/MainLayout';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';
import CareerHeader from 'components/CareerHeader/CareerHeader';
import AvailableJobs from 'components/AvailableJobs/AvailableJobs';
import { getPageTitle } from 'utils/utils';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CareerPage = () => (
	<Main title={getPageTitle('Career')}>
		<div className="container">
			<CareerHeader />
			<AvailableJobs />
		</div>

		<TechnologiesCarousel />
	</Main>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['common']))
	}
});
export default CareerPage;
