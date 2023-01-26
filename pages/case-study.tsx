import Main from 'layouts/MainLayout';
import SubpageIntro from 'components/SubpageIntro/SubpageIntro';
import { OUR_PRODUCTS } from 'content/ourProducts';
import { getIsEven, getPageTitle } from 'utils/utils';
import Product from 'components/Product/Product';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';

const CaseStudyPage = () => {
	return (
		<Main title={getPageTitle('Case study')}>
			<div className='container'>
				<SubpageIntro
					title='Case study'
					description='Przejrzyj nasze case study i przekonaj się sam, jakie korzyści możemy przynieść Twojemu biznesowi.'
				/>

				{OUR_PRODUCTS.map((product, index) => (
					<div key={product.title} data-aos={`${getIsEven(index) ? 'fade-left' : 'fade-right'}`}>
						<Product product={product} />
					</div>
				))}
			</div>
		</Main>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
	}
});

export default CaseStudyPage;
