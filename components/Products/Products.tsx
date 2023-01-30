import { OUR_PRODUCTS } from 'content/ourProducts';
import Product from 'components/Product/Product';
import { getIsEven } from 'utils/utils';

const Products: React.FC = () => (
	<section className="products">
		<div className="container">
			<h3 className="products__title">Zobacz nasze realizacje</h3>

			<p className="products__description">
				Przejrzyj efekty współpracy z naszymi klientami i przekonaj się sam, jakie korzyści możemy przynieść Twojemu
				biznesowi.
			</p>
		</div>

		{OUR_PRODUCTS.map((product, index) => (
			<div key={product.title} data-aos={`${getIsEven(index) ? 'fade-left' : 'fade-right'}`}>
				<Product product={product} />
			</div>
		))}
	</section>
);

export default Products;
