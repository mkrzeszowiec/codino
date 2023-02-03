import Main from 'layouts/MainLayout';
import { useTranslation } from 'next-i18next';
import ServicesIntro from 'components/ServicesIntro/ServicesIntro';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';
import PositionDetails from 'components/WhatWeDo/PositionDetails';
import StartWork from 'components/StartWork/StartWork';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import { getPageTitle } from 'utils/utils';
import UseCasesCarousel from 'components/UseCasesCarousel/UseCasesCarousel';
import { useRouter } from 'next/router';
import { getServicesTranslated } from 'content/services/services';

const ServicesPage = () => {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<Main title={getPageTitle(t('common.subpages.services'))}>
			<div className="container">
				<ServicesIntro />
				<WhatWeDo />
			</div>

			{getServicesTranslated(router.locale).map((position, index) => (
				<PositionDetails key={position.slug} position={position} index={index + 1} />
			))}

			<div className="container">
				<StartWork />
			</div>

			<UseCasesCarousel />
		</Main>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
	}
});

export default ServicesPage;
