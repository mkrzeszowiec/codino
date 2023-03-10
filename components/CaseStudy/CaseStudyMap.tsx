import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import map from 'public/maps/worldMap.json';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Product } from 'types/common';
import { colors } from 'utils/colors';

const CaseStudyMap: React.FC<{ product?: Product }> = ({ product }) => {
	const { t } = useTranslation();
	const selectedCountry = product.countries;
	const getFillColor = (id: string): string => (selectedCountry?.includes(id) ? colors.primary : colors.gray);

	return (
		<div className="caseStudyMap" data-aos="fade-down">
			<SectionTitle className="caseStudyMap__title">{t('components.caseStudy.map')}</SectionTitle>

			{Array.isArray(selectedCountry) ? (
				<ComposableMap className="caseStudyMap__genericMap">
					<Geographies geography={map}>
						{({ geographies }) =>
							geographies.map(geo => <Geography fill={getFillColor(geo.id)} key={geo.rsmKey} geography={geo} />)
						}
					</Geographies>
				</ComposableMap>
			) : (
				<Image className="caseStudyMap__image" src={`/maps/${selectedCountry}.svg`} alt="" width={2000} height={2000} />
			)}
		</div>
	);
};

export default CaseStudyMap;
