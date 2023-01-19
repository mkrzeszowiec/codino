import Layout from 'layouts/Main';
import PageIntro from 'components/PageIntro/PageIntro';
import Products from 'components/Products/Products';

const IndexPage = () => {
	return (
		<Layout>
			<PageIntro />
			<Products />
		</Layout>
	);
};

export default IndexPage;
