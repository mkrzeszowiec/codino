import { useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { technology } from 'types/common';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { allTechnologyLogos, mainTechnologyLogos } from 'components/TechnologiesCarousel/allTechnologyLogos';

const autoplayOptions = {
	delay: 1500
};

interface TechnologiesCarouselProps {
	technologies?: technology[];
}

const TechnologiesCarousel: React.FC<TechnologiesCarouselProps> = ({ technologies }) => {
	const [sliderRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

	const visibleTechnologies = useMemo(
		() =>
			technologies?.length
				? allTechnologyLogos.filter(logo => technologies?.some(technology => logo.src.includes(technology)))
				: mainTechnologyLogos,
		[technologies]
	);

	return (
		<div className="technologiesCarousel">
			<div className="technologiesCarousel__viewport" ref={sliderRef}>
				<div className="technologiesCarousel__container">
					{visibleTechnologies.map(logo => (
						<div className="technologiesCarousel__slide" key={logo.src}>
							<Image className="technologiesCarousel__slide__img" src={logo.src} width={250} height={100} alt="" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TechnologiesCarousel;
