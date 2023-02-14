import { useState, useEffect } from 'react';
import Game from 'components/game/Game';

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
