import { useRouter } from 'next/router';
import { getOurProductsTranslated } from 'public/content/products/products';
import Product from 'components/Product/Product';
import { getIsEven } from 'utils/utils';
import { useTranslation } from 'next-i18next';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import Button from 'components/Button/Button';

const Products = () => {
	const HOMEPAGE_PRODUCTS_AMOUNT = 3;
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<section className="products">
			<div className="container">
				<SectionTitle className="products__title">{t('components.caseStudy.header')}</SectionTitle>
				<p className="products__description">{t('components.caseStudy.description')}</p>
			</div>

			{getOurProductsTranslated(router.locale)
				.slice(0, HOMEPAGE_PRODUCTS_AMOUNT)
				.map((product, index) => (
					<div key={product.title} data-aos={`${getIsEven(index) ? 'fade-left' : 'fade-right'}`}>
						<Product product={product} />
					</div>
				))}

			<div className="products__buttonWrapper">
				<Button label={t('common.showAll')} href="/case-study" type="border-black" />
			</div>
		</section>
	);
};

export default Products;
