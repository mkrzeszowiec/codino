import { useState, useEffect } from 'react';
import Game from 'components/game/Game';

const GameMain = () => {
	const [playing, setPlaying] = useState(false);

	const onKeyDown = event => {
		if (event.key === ' ') {
			event.preventDefault();
			setPlaying(true);
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
