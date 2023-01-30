import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, NextButton, PrevButton } from 'components/UseCasesCarousel/UseCasesArrowsAndDots';
import { OUR_PRODUCTS } from 'content/ourProducts';
import Product from 'components/Product/Product';
import Button from 'components/Button/Button';

const UseCasesCarousel: React.FC = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
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
		<>
			<div className="container position-relative">
				<h3 className="useCasesCarousel__title">Case study</h3>
				<Button
					className="useCasesCarousel__allButton"
					type="border-black"
					label="Pokaż wszystkie"
					href="/case-study"
				/>

				<PrevButton onClick={scrollPrev} />
				<NextButton onClick={scrollNext} />
			</div>

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

				<div className="useCasesCarousel__dots">
					{scrollSnaps.map((_, index) => (
						<DotButton key={index} selected={index === selectedIndex} onClick={() => scrollTo(index)} />
					))}
				</div>
			</div>
		</>
	);
};

export default UseCasesCarousel;