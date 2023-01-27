import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton } from 'components/UseCasesCarousel/UseCasesArrows';
import { OUR_PRODUCTS } from 'content/ourProducts';
import Product from 'components/Product/Product';

const EmblaCarousel: React.FC = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

	const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on('select', onSelect);
		emblaApi.on('reInit', onSelect);
	}, [emblaApi, onSelect]);

	return (
		<div className="useCasesCarousel">
			<div className="useCasesCarousel__viewport" ref={emblaRef}>
				<div className="useCasesCarousel__container">
					{OUR_PRODUCTS.map((product, index) => (
						<div className="useCasesCarousel__slide" key={index}>
							<Product product={product} key={product.title} />
						</div>
					))}
				</div>
			</div>

			<PrevButton onClick={scrollPrev} />
			<NextButton onClick={scrollNext} />
		</div>
	);
};

export default EmblaCarousel;
