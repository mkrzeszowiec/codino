import Layout from 'layouts/Main';
import PageIntro from 'components/PageIntro/PageIntro';
import Products from 'components/Products/Products';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';

const IndexPage = () => {
	return (
		<Layout>
			<PageIntro />
			<div className="container">
				<WhatWeDo />
			</div>

			<Products />
		</Layout>
	);
};

export default IndexPage;
