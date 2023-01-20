import Link from 'next/link';
import ArrowRight from '../icons/ArrowRight';

const Position = ({ title, description }: { title: string, description: string }) => (
	<Link className="position" href="/services">
		<h4 className="position__title">{title}</h4>
		<p className="position__description">{description}</p>
		<div className="position__button">
			<ArrowRight />
		</div>
	</Link>
);

export default Position;
