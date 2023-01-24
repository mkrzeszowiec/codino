import Main from 'layouts/MainLayout';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';
import CareerHeader from 'components/CareerHeader/CareerHeader';
import AvailableJobs from 'components/AvailableJobs/AvailableJobs';
import { getPageTitle } from 'utils/utils';

const CareerPage = () => (
	<Main title={getPageTitle('Career')}>
		<div className="container">
			<CareerHeader />
			<AvailableJobs />
		</div>

		<TechnologiesCarousel />
	</Main>
);

export default CareerPage;
