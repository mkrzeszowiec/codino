import React from 'react';
import ArrowRightIcon from 'components/icons/ArrowRight';
import ArrowLeftIcon from 'components/icons/ArrowLeft';

type PrevNextButtonPropType = {
	onClick: () => void;
};

export const PrevButton: React.FC<PrevNextButtonPropType> = ({ onClick }) => (
	<button className="useCasesCarousel__button useCasesCarousel__button--prev" aria-label="prev" onClick={onClick}>
		<ArrowLeftIcon />
	</button>
);

export const NextButton: React.FC<PrevNextButtonPropType> = ({ onClick }) => (
	<button className="useCasesCarousel__button useCasesCarousel__button--next" aria-label="next" onClick={onClick}>
		<ArrowRightIcon />
	</button>
);

type DotButtonPropType = {
	selected: boolean;
	onClick: () => void;
};

export const DotButton: React.FC<DotButtonPropType> = ({ selected, onClick }) => (
	<button
		aria-label="dot"
		className={`useCasesCarousel__dot ${selected ? ' useCasesCarousel__dot--selected' : ''}`}
		type="button"
		onClick={onClick}
	/>
);
