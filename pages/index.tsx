import Layout from 'layouts/Main';
import PageIntro from 'components/PageIntro/PageIntro';
import Products from 'components/Products/Products';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';
import StartWork from 'components/StartWork/StartWork';
import MeetCodino from 'components/MeetCodino/MeetCodino';

const IndexPage = () => {
	return (
		<Layout>
			<PageIntro />
			<div className="container">
				<WhatWeDo />
			</div>

			<TechnologiesCarousel />
			<Products />

			<div className="container" data-aos="fade-down">
				<StartWork />
				<MeetCodino />
			</div>
		</Layout>
	);
};

export default IndexPage;
