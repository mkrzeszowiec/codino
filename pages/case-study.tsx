import Main from 'layouts/MainLayout';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';
import { OUR_PRODUCTS } from 'content/ourProducts';
import { getIsEven } from 'utils/utils';
import Product from 'components/Product/Product';

const CaseStudyPage = () => (
	<Main title="Case study - Codino">
		<div className="container">
			<SubpageIntro
				title="Case study"
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate delectus dolor, fugiat id, nostrum numquam omnis quo repellendus rerum sunt suscipit, totam voluptate! Aperiam deleniti dignissimos magni optio porro!"
			/>

			{OUR_PRODUCTS.map((product, index) => (
				<div key={product.title} data-aos={`${getIsEven(index) ? 'fade-left' : 'fade-right'}`}>
					<Product product={product} />
				</div>
			))}
		</div>
	</Main>
);

export default CaseStudyPage;
