import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { technologyLogos } from 'components/TechnologiesCarousel/technologyLogos';

const autoplayOptions = {
	delay: 1500
};

const TechnologiesCarousel = () => {
	const [sliderRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

	return (
		<div className="technologiesCarousel">
			<div className="technologiesCarousel__viewport" ref={sliderRef}>
				<div className="technologiesCarousel__container">
					{technologyLogos.map(logo => (
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
