import CheckCircleIcon from 'components/icons/CheckCircle';
import { Position } from 'types/common';
import { getNumberWithLeadingZero } from 'utils/utils';
import HtmlLogo from '../icons/HtmlLogo';

interface PositionDetailsProps {
	position: Position;
	index: number;
}

const PositionDetails: React.FC<PositionDetailsProps> = ({ position, index }) => {
	const { title, description, slug, scope } = position;

	return (
		<div className="positionDetails" id={slug}>
			<div className="container">
				<div className="positionDetails__top">
					<h4 className="positionDetails__name">
						<span className="positionDetails__number">{getNumberWithLeadingZero(index)}</span>
						{title}
					</h4>

					<p className="positionDetails__description">
						{description}
						<br /> <br />
						<HtmlLogo />
						<HtmlLogo />
						<HtmlLogo />
					</p>
				</div>

				<div className="positionDetails__scope">
					<span className="positionDetails__scopeIcon">
						<CheckCircleIcon />
					</span>
					<h5 className="positionDetails__scopeTitle">Zakres</h5>
					<p className="positionDetails__scopeDescription">{scope}</p>
				</div>
			</div>
		</div>
	);
};

export default PositionDetails;
