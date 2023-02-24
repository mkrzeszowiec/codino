import { useState } from 'react';
import Game from 'components/game/Game';
import { event as googleEvent } from 'nextjs-google-analytics';
import { useIsomorphicLayoutEffect } from 'utils/utils';
import { GameContext } from './context';

interface GameMainProps {
	onClose: () => void;
}

const GameMain: React.FC<GameMainProps> = ({ onClose }) => {
	const [playing, setPlaying] = useState(false);
	const [showTable, setShowTable] = useState(false);
	const [isInputFocus, setIsInputFocus] = useState(false);

	const onKeyDown = event => {
		if (event.key === ' ') {
			if (isInputFocus) return;
			event.preventDefault();
			setPlaying(true);
			setShowTable(false);
		}

		if (event.key === 't') {
			if (isInputFocus) return;
			event.preventDefault();
			setShowTable(!showTable);
		}

		if (event.key === 'Escape') {
			event.preventDefault();
			onClose?.();

			googleEvent('press_escape_to_close_game', {
				category: 'Game'
			});
		}
	};

	useIsomorphicLayoutEffect(() => {
		window.addEventListener('keydown', onKeyDown);

		return function cleanup() {
			window.removeEventListener('keydown', onKeyDown);
		};
	});

	return (
		<GameContext.Provider value={{ isInputFocus, setIsInputFocus }}>
			<Game playing={playing} setPlaying={setPlaying} showTable={showTable} gameOverClose={() => setShowTable(true)} />
		</GameContext.Provider>
	);
};

export default GameMain;
