import { getOurProductsTranslated } from 'content/ourProducts';
import Product from 'components/Product/Product';
import { getIsEven } from 'utils/utils';
import { useTranslation } from 'next-i18next';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { useRouter } from 'next/router';

const Products: React.FC = () => {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<section className="products">
			<div className="container">
				<SectionTitle className="products__title">{t('components.caseStudy.header')}</SectionTitle>
				<p className="products__description">{t('components.caseStudy.description')}</p>
			</div>

			{getOurProductsTranslated(router.locale).map((product, index) => (
				<div key={product.title} data-aos={`${getIsEven(index) ? 'fade-left' : 'fade-right'}`}>
					<Product product={product} />
				</div>
			))}
		</section>
	);
};

export default Products;
