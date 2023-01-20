import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import imageByIndex, { images } from './imageByIndex';

const SLIDE_COUNT = images.length;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const autoplayOptions = {
	delay: 1500
};

const TechnologiesCarousel = () => {
	const [sliderRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

	return (
		<div className="technologiesCarousel">
			<div className="technologiesCarousel__viewport" ref={sliderRef}>
				<div className="technologiesCarousel__container">
					{SLIDES.map(index => (
						<div className="technologiesCarousel__slide" key={index}>
							<img className="technologiesCarousel__slide__img" src={imageByIndex(index).src} alt="" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TechnologiesCarousel;
