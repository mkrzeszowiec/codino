import Layout from 'layouts/Main';
import PageIntro from 'components/PageIntro/PageIntro';
import Products from 'components/Products/Products';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';

const IndexPage = () => {
	return (
		<Layout>
			<PageIntro />
			<div className="container">
				<WhatWeDo />
			</div>

			<TechnologiesCarousel />

			<Products />
		</Layout>
	);
};

export default IndexPage;
