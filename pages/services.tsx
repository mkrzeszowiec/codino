import Main from 'layouts/MainLayout';
import ServicesIntro from 'components/ServicesIntro/ServicesIntro';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';
import PositionDetails from 'components/WhatWeDo/PositionDetails';
import StartWork from 'components/StartWork/StartWork';
import { CURRENT_POSITIONS } from 'content/currentPositions';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import { getIsEven, getPageTitle } from 'utils/utils';
import { useTranslation } from 'next-i18next';

const ServicesPage = () => {
	const { t } = useTranslation();

	return (
		<Main title={getPageTitle(t('common.subpages.services'))}>
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
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
	}
});

export default ServicesPage;
