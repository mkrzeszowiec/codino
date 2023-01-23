import Main from 'layouts/MainLayout';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';
import CareerHeader from 'components/CareerHeader/CareerHeader';
import AvailableJobs from 'components/AvailableJobs/AvailableJobs';

const CareerPage = () => (
	<Main title="Career - Codino">
		<div className="container">
			<CareerHeader />
			<AvailableJobs />
		</div>

		<TechnologiesCarousel />
	</Main>
);

export default CareerPage;
