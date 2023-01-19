import Button from 'components/Button/Button';

interface Product {
	title: string;
	description: string;
	imageSource: string;
	url: string;
	color: string;
}

interface ProductProps {
	product: Product;
	className?: string;
}

const Product: React.FC<ProductProps> = ({ product, className = '' }) => {
	const { description, imageSource, title, url, color } = product;

	return (
		<div className={`product ${className}`} style={{ backgroundColor: color }}>
			<div className="product__infoSection">
				<h3 className="product__title">{title}</h3>

				<p className="product__description">{description}</p>

				<p className="product__technology">Technology:</p>

				<Button type="white" className="product__button" label="Show me" href={url} />
			</div>

			<div className="product__imageSection">
				<img className="product__image" src={imageSource} alt="" />
			</div>
		</div>
	);
};

export default Product;
