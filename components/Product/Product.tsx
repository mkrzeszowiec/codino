import Button from 'components/Button/Button';
import { Product } from 'types/common';
import HtmlLogo from 'components/icons/HtmlLogo';
import Image from 'next/image';

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

				<p className="product__technology">
					Technology:
					<HtmlLogo />
				</p>

				<Button type="white" className="product__button" label="Show me" href={url} />
			</div>

			<div className="product__imageSection">
				<Image className="product__image" src={imageSource} alt="" width={600} height={600} />
			</div>
		</div>
	);
};

export default Product;
