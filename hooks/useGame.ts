import { useState, useEffect } from 'react';
import useLockedBody from 'hooks/useLockBodyScroll';

interface UseGameOutput {
	isGameOpening: boolean;
	isAnimating: boolean;
	isGameMode: boolean;
	onClickGame: () => void;
	closeGame: () => void;
}

const ESCAPE_KEY_CODE = 27;
const ANIMATION_TIME_MS = 1200;
const GAME_START_DELAY_TIME_MS = 1800;

const useGame = (): UseGameOutput => {
	const [isGameOpening, setIsGameOpening] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [isGameMode, setIsGameMode] = useState(false);

	useLockedBody(isGameMode);

	const onClickGame = () => {
		if (isGameOpening) {
			return closeGame();
		}

		setIsAnimating(true);

		setTimeout(() => {
			setIsGameOpening(true);
		}, ANIMATION_TIME_MS);

		setTimeout(() => {
			setIsGameMode(true);
		}, GAME_START_DELAY_TIME_MS);
	};

	const closeGame = () => {
		setIsGameOpening(false);
		setIsGameMode(false);
		setIsAnimating(false);
	};

	useEffect(() => {
		if (isGameMode) {
			document.addEventListener('keydown', handleKeyDown);
			return () => document.removeEventListener('keydown', handleKeyDown);
		}
	}, [isGameMode]);

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.keyCode === ESCAPE_KEY_CODE) {
			closeGame();
		}
	};

	return {
		isGameOpening,
		isAnimating,
		isGameMode,
		onClickGame,
		closeGame
	};
};

export default useGame;
