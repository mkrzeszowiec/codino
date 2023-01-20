import Main from 'layouts/Main';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';

const CareerPage = () => (
	<Main title="CareerPage - Codino">
		<div className="container">
			<SubpageIntro
				title="Career"
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate delectus dolor, fugiat id, nostrum numquam omnis quo repellendus rerum sunt suscipit, totam voluptate! Aperiam deleniti dignissimos magni optio porro!"
			/>
		</div>

		<TechnologiesCarousel />
	</Main>
);

export default CareerPage;
