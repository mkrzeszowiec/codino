import Linkify from 'react-linkify';
import Button from 'components/Button/Button';
import { Product } from 'types/common';
import Image from 'next/image';
import ArrowRightIcon from 'components/icons/ArrowRight';

interface ProductProps {
	product: Product;
	className?: string;
}

const VISIBLE_TECHNOLOGIES_NUMBER = 4;

const Product: React.FC<ProductProps> = ({ product, className = '' }) => {
	const { description, imageSource, title, slug, color, technologies } = product;
	const visibleTechnologies = technologies?.slice(0, VISIBLE_TECHNOLOGIES_NUMBER);

	return (
		<div className={`product ${className}`} style={{ backgroundColor: color }}>
			<div className="product__infoSection">
				<h3 className="product__title">{title}</h3>

				<p className="product__description">
					<Linkify>{description}</Linkify>
				</p>

				<p className="product__technology">
					Technologie:
					{visibleTechnologies?.map(technology => (
						<Image
							key={technology}
							className="product__technologyImage"
							src={`/images/technologies/icons/${technology}.svg`}
							width={50}
							height={50}
							alt=""
						/>
					))}
				</p>

				<Button
					type="white"
					className="product__button"
					label="Zobacz szczegóły"
					href={`/case-study/${slug}`}
					icon={<ArrowRightIcon />}
				/>
			</div>

			<div className="product__imageSection">
				<Image className="product__image" src={imageSource} alt="" width={600} height={600} />
			</div>
		</div>
	);
};

export default Product;
