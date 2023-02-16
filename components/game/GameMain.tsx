import { useState, useEffect } from 'react';
import Game from 'components/game/Game';
import { event as googleEvent } from 'nextjs-google-analytics';

interface GameMainProps {
	onClose: () => void;
}

const GameMain: React.FC<GameMainProps> = ({ onClose }) => {
	const [playing, setPlaying] = useState(false);

	const onKeyDown = event => {
		if (event.key === ' ') {
			event.preventDefault();
			setPlaying(true);
		}

		if (event.key === 'Escape') {
			event.preventDefault();
			onClose?.();

			googleEvent('press_escape_to_close_game', {
				category: 'Game'
			});
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);

		return function cleanup() {
			window.removeEventListener('keydown', onKeyDown);
		};
	});

	return <Game playing={playing} setPlaying={setPlaying} />;
};

export default GameMain;
