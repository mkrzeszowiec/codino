import AOS from 'aos';
import 'aos/dist/aos.css';
import { CODINO_PRODUCTS } from 'contants/common';
import Product from 'components/Product/Product';
import { useEffect } from 'react';
import { isEven } from 'utils/utils';

const Products: React.FC = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<section className="products">
			<div className="container">
				<h3 className="products__title">Zobacz nasze realizacje</h3>

				<p className="products__description">
					Krótki opis przedstawionej oferty. Praesent viverra commodo nisl ac feugiat.Vestibulum nec vulputate neque.
					Nullam gravida rutrum tortor,
				</p>
			</div>

			{CODINO_PRODUCTS.map((product, index) => (
				<div key={product.title} data-aos={`${isEven(index) ? 'fade-left' : 'fade-right'}`}>
					<Product product={product} />
				</div>
			))}
		</section>
	);
};

export default Products;
