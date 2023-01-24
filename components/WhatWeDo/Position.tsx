import Link from 'next/link';
import ArrowRightIcon from 'components/icons/ArrowRight';
import { Position } from 'types/common';

interface PositionProps {
	position: Position;
}

const Position: React.FC<PositionProps> = ({ position }) => {
	const { title, shortDescription, slug } = position;
	return (
		<Link className="position" href={`/services#${slug}`}>
			<h4 className="position__title">{title}</h4>
			<p className="position__description">{shortDescription}</p>
			<div className="position__button">
				<ArrowRightIcon />
			</div>
		</Link>
	);
};

export default Position;
