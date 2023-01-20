import Main from 'layouts/Main';
import ServicesIntro from 'components/ServicesIntro/ServicesIntro';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';
import PositionDetails from 'components/WhatWeDo/PositionDetails';
import { CODINO_POSITIONS } from 'contants/content';
import { getIsEven } from 'utils/utils';

const ServicesPage = () => (
	<Main title="Services - Codino">
		<div className="container">
			<ServicesIntro />
			<WhatWeDo />
		</div>

		{CODINO_POSITIONS.map((position, index) => (
			<div key={position.slug} data-aos={`${getIsEven(index) ? 'fade-left' : 'fade-right'}`}>
				<PositionDetails position={position} index={index + 1} />
			</div>
		))}
	</Main>
);

export default ServicesPage;
