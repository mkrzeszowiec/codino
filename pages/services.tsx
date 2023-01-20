import Main from 'layouts/Main';
import ServicesIntro from 'components/ServicesIntro/ServicesIntro';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';

const ServicesPage = () => (
	<Main title="Services - Codino">
		<div className="container">
			<ServicesIntro />
			<WhatWeDo />
		</div>
	</Main>
);

export default ServicesPage;
