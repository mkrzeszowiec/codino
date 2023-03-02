import MainLayout from 'components/layout/MainLayout';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';
import { getOurProductsTranslated } from 'public/content/products/products';
import { getIsEven, getPageTitle } from 'utils/utils';
import Product from 'components/Product/Product';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const CaseStudyPage = () => {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<MainLayout title={getPageTitle('Case study')}>
			<div className="container">
				<SubpageIntro title={t('components.caseStudy.header')} description={t('components.caseStudy.description')} />

				{getOurProductsTranslated(router.locale).map((product, index) => (
					<div key={product.title} data-aos={`${getIsEven(index) ? 'fade-left' : 'fade-right'}`}>
						<Product product={product} />
					</div>
				))}
			</div>
		</MainLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
	}
});

export default CaseStudyPage;
