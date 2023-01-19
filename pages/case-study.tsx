import Main from 'layouts/Main';
import Products from 'components/Products/Products';
import SubpageIntro from '../components/SubpageIntro/SubpageIntro';

const CaseStudyPage = () => (
	<Main title="Case study - Codino">
		<div className="container">
			<SubpageIntro
				title="Case study"
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate delectus dolor, fugiat id, nostrum numquam omnis quo repellendus rerum sunt suscipit, totam voluptate! Aperiam deleniti dignissimos magni optio porro!"
			/>

			<Products />
		</div>
	</Main>
);

export default CaseStudyPage;
