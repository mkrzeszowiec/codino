import React from 'react';
import ArrowRightIcon from 'components/icons/ArrowRight';
import ArrowLeftIcon from 'components/icons/ArrowLeft';

type PrevNextButtonPropType = {
	onClick: () => void;
};

export const PrevButton: React.FC<PrevNextButtonPropType> = ({ onClick }) => (
	<button className="useCasesCarousel__button useCasesCarousel__button--prev" onClick={onClick}>
		<ArrowLeftIcon />
	</button>
);

export const NextButton: React.FC<PrevNextButtonPropType> = ({ onClick }) => (
	<button className="useCasesCarousel__button useCasesCarousel__button--next" onClick={onClick}>
		<ArrowRightIcon />
	</button>
);
