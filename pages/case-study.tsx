import Main from 'layouts/MainLayout';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';
import { OUR_PRODUCTS } from 'content/ourProducts';
import { getIsEven, getPageTitle } from 'utils/utils';
import Product from 'components/Product/Product';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CaseStudyPage = () => (
	<Main title={getPageTitle('Case study')}>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['common']))
	}
});

export default CaseStudyPage;
