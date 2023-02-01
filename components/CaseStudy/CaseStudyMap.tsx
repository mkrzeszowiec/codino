import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import map from 'content/worldMap.json';

const CaseStudyMap = () => {
	return (
		<div className="caseStudyMap">
			<ComposableMap>
				<Geographies geography={map}>
					{({ geographies }) => geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)}
				</Geographies>
			</ComposableMap>
		</div>
	);
};

export default CaseStudyMap;
