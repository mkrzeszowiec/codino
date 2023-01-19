import AOS from 'aos';
import 'aos/dist/aos.css';
import { CODINO_PRODUCTS } from '../../contants/common';
import Product from '../product/Product';
import { useEffect } from 'react';

const Products: React.FC = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	const isEven = number => number % 2 == 0;

	return (
		<section className="products-wrapper">
			{CODINO_PRODUCTS.map((product, index) => (
				<div key={product.title} data-aos={`${isEven(index) ? 'fade-left' : 'fade-right'}`}>
					<Product product={product} />
				</div>
			))}
		</section>
	);
};

export default Products;
