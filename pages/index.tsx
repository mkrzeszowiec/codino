import MainLayout from 'layouts/MainLayout';
import PageIntro from 'components/PageIntro/PageIntro';
import Products from 'components/Products/Products';
import WhatWeDo from 'components/WhatWeDo/WhatWeDo';
import TechnologiesCarousel from 'components/TechnologiesCarousel/TechnologiesCarousel';
import StartWork from 'components/StartWork/StartWork';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';

const IndexPage = () => {
	return (
		<MainLayout containerClassName="homepagePage">
			<PageIntro />
			<div className="container">
				<WhatWeDo />
			</div>

			<TechnologiesCarousel />
			<Products />

			<div className="container" data-aos="fade-down">
				<StartWork />
			</div>
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
	}
});

export default IndexPage;
