import Main from 'layouts/MainLayout';
import ServicesIntro from 'components/ServicesIntro/ServicesIntro';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';
import PositionDetails from 'components/WhatWeDo/PositionDetails';
import { CURRENT_POSITIONS } from 'content/currentPositions';
import { getIsEven, getPageTitle } from 'utils/utils';
import StartWork from '../components/StartWork/StartWork';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ServicesPage = () => (
	<Main title={getPageTitle('Services')}>
		<div className="container">
			<ServicesIntro />
			<WhatWeDo />
		</div>

		{CURRENT_POSITIONS.map((position, index) => (
			<div key={position.slug} data-aos={`${getIsEven(index) ? 'fade-left' : 'fade-right'}`}>
				<PositionDetails position={position} index={index + 1} />
			</div>
		))}

		<StartWork />
	</Main>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', ['common']))
	}
});

export default ServicesPage;
