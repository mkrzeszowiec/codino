import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import map from 'content/worldMap.json';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { useTranslation } from 'next-i18next';

const PRIMARY_COUNTRY_COLOR = '#15a99b';
const DEFAULT_COUNTRY_COLOR = '#dcdcdc';

const CaseStudyMap: React.FC<{ selectedCountry?: string[] }> = ({ selectedCountry }) => {
	const { t } = useTranslation();
	const getFillColor = (id: string): string =>
		selectedCountry?.includes(id) ? PRIMARY_COUNTRY_COLOR : DEFAULT_COUNTRY_COLOR;

	return (
		<div className="caseStudyMap">
			<SectionTitle className="caseStudyMap__title">{t('components.caseStudy.map')}</SectionTitle>

			<ComposableMap>
				<Geographies geography={map}>
					{({ geographies }) =>
						geographies.map(geo => {
							return <Geography fill={getFillColor(geo.id)} key={geo.rsmKey} geography={geo} />;
						})
					}
				</Geographies>
			</ComposableMap>
		</div>
	);
};

export default CaseStudyMap;