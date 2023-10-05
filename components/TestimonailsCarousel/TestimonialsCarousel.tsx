import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useRouter } from 'next/router';
import { getOurProductsTranslated } from 'public/content/products/products';
import CaseStudyTestimonial from '../CaseStudy/CaseStudyTestimonial';

const TestimonialsCarousel: React.FC = () => {
	const router = useRouter();

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: 'center',
	});

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi, setSelectedIndex]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		setScrollSnaps(emblaApi.scrollSnapList());
		emblaApi.on('select', onSelect);
		emblaApi.on('reInit', onSelect);
	}, [emblaApi, setScrollSnaps, onSelect]);

	return (
		<section className="testimonialsCarousel">
			<h3 className="testimonialsCarousel__title">Refencje todo</h3>
			<div className="testimonialsCarousel__viewport" ref={emblaRef}>
				<div className="testimonialsCarousel__container">
					{getOurProductsTranslated(router.locale).map((product, index) => (
						<div className="testimonialsCarousel__slide" key={index}>
							<CaseStudyTestimonial key={product.title} />
						</div>
					))}
				</div>
			</div>

			<div className="testimonialsCarousel__dots">
				{scrollSnaps.map((_, index) => (
					<button
						key={index}
						aria-label="dot"
						className={`testimonialsCarousel__dot ${
							index === selectedIndex ? ' testimonialsCarousel__dot--selected' : ''
						}`}
						type="button"
						onClick={() => scrollTo(index)}
					/>
				))}
			</div>
		</section>
	);
};

export default TestimonialsCarousel;
