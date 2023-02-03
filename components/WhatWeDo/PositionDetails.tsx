import { Position } from 'types/common';
import { getNumberWithLeadingZero } from 'utils/utils';
import Image from 'next/image';

interface PositionDetailsProps {
	position: Position;
	index: number;
}

const PositionDetails: React.FC<PositionDetailsProps> = ({ position, index }) => {
	const { title, description, slug, icons } = position;

	return (
		<div className="positionDetails" id={slug}>
			<div className="container">
				<div className="positionDetails__top">
					<h4 className="positionDetails__name">
						<span className="positionDetails__number">{getNumberWithLeadingZero(index)}</span>
						{title}

						<br />
						<br />
						{icons?.map(technology => (
							<Image
								key={technology}
								className="positionDetails__technology"
								src={`/images/technologies/icons/${technology}.svg`}
								width={50}
								height={50}
								title={technology}
								alt={technology}
							/>
						))}
					</h4>

					<p className="positionDetails__description">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default PositionDetails;
