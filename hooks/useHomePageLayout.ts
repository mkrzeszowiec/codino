import { useState } from 'react';
import { IPosition } from 'react-tooltip';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

interface useHomePageLayoutOutput {
	isHeaderOnHero: boolean;
	isVisibleBottomGameButton: boolean;
}

const GAME_BOTTOM_BUTTON_VISIBLE_OFFSET = -600;

const useHomePageLayout = (): useHomePageLayoutOutput => {
	const [isVisibleBottomGameButton, setIsVisibleBottomGameButton] = useState(false);
	const [isHeaderOnHero, setIsHeaderOnHero] = useState(true);

	useScrollPosition(({ currPos }) => handleScroll(currPos), []);

	const handleScroll = (currentPosition: IPosition) => {
		setIsVisibleBottomGameButton(currentPosition.y < GAME_BOTTOM_BUTTON_VISIBLE_OFFSET);
		setIsHeaderOnHero(currentPosition.y === 0);
	};

	return {
		isHeaderOnHero,
		isVisibleBottomGameButton
	};
};

export default useHomePageLayout;
