import React, { useEffect, useRef, useState } from 'react';
import Asteroid from 'components/game/asteroid';
import Ship from 'components/game/ship';
import TitleScreen from 'components/game/TitleScreen';
import { getRandomNum, isCollision, TypeOfGameObject } from 'components/game/utils';
import GameBackground from 'components/game/GameBackground';
import { event } from 'nextjs-google-analytics';

interface GameProps {
	setPlaying: (isPlaying) => void;
	playing: boolean;
}

const Game: React.FC<GameProps> = props => {
	const { playing, setPlaying } = props;

	const [state, setState] = useState({
		keys: { up: false, down: false, left: false, right: false, space: false },
		viewport: {
			width: window.innerWidth,
			height: window.innerHeight,
			pixelRatio: window.devicePixelRatio || 1
		},
		score: 0,
		gameOver: false,
		context: undefined
	});

	const { viewport, score, gameOver } = state;

	const groups = {
		playerShip: [],
		bullets: [],
		asteroids: [],
		particles: []
	};

	const canvasRef = useRef();
	const requestId = useRef<number | undefined>();

	useEffect(() => {
		// @ts-ignore
		const context = canvasRef?.current?.getContext('2d');
		const {
			viewport: { pixelRatio }
		} = state;

		context?.scale(pixelRatio, pixelRatio);
		setState(prevState => ({ ...prevState, context }));

		createInitialAsteroids(5);
		update();

		addEventListeners();

		return () => {
			removeEventListeners();
		};
	}, []);

	useEffect(() => {
		playing && startGame();
	}, [playing]);

	const onResize = () => {
		const { context } = state;
		const pixelRatio = window.devicePixelRatio || 1;

		setState(prevState => ({
			...prevState,
			viewport: {
				width: window.innerWidth,
				height: window.innerHeight,
				pixelRatio
			}
		}));

		context?.scale(pixelRatio, pixelRatio);
	};

	const onKeyDown = event => {
		onKeyChange(true, event);
	};

	const onKeyUp = event => {
		onKeyChange(false, event);
	};

	const onKeyChange = (isBeingPressed, event) => {
		const { keys } = state;
		const { keyCode } = event;

		const keyCodes = {
			37: 'left',
			38: 'up',
			39: 'right',
			40: 'down',
			32: 'space'
		};

		if (Object.keys(keyCodes).includes(String(keyCode))) {
			event.preventDefault();
		}

		if (keyCodes[keyCode]) {
			keys[keyCodes[keyCode]] = isBeingPressed;
		}

		setState(prevState => ({ ...prevState, keys }));
	};

	const addEventListeners = () => {
		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('keyup', onKeyUp);
		window.addEventListener('resize', onResize);
	};

	const removeEventListeners = () => {
		window.removeEventListener('keydown', onKeyDown);
		window.removeEventListener('keyup', onKeyUp);
		window.removeEventListener('resize', onResize);
	};

	const startGame = () => {
		if (requestId.current) {
			cancelAnimationFrame(requestId.current);
		}

		clearAllGroups();
		createShip();
		createInitialAsteroids(4);

		setState(prevState => ({
			...prevState,
			score: 0,
			gameOver: false
		}));

		requestId.current = requestAnimationFrame(update);
	};

	const endGame = () => {
		setPlaying(false);

		event('game_over', {
			category: 'Game',
			value: score
		});

		setState(prevState => ({ ...prevState, gameOver: true }));
	};

	const createShip = () => {
		const {
			viewport: { width, height }
		} = state;

		const position = {
			x: width / 2,
			y: height / 2
		};

		const ship = new Ship({
			position,
			add: add,
			die: endGame
		});

		add(ship).to(TypeOfGameObject.playerShip);
	};

	const createAsteroid = () => {
		const {
			viewport: { width, height }
		} = state;

		const position = {
			x: getRandomNum(0, width),
			y: getRandomNum(0, height)
		};
		const radius = getRandomNum(80, 100);

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return new Asteroid({
			position,
			radius,
			add: add,
			addToScore: addToScore
		});
	};

	const createInitialAsteroids = numOfAsteroids => {
		const addNewAsteroid = () => {
			const asteroid = createAsteroid();
			if (isCollision(groups.playerShip[0], asteroid)) {
				addNewAsteroid();
			} else {
				add(asteroid).to(TypeOfGameObject.asteroids);
			}
		};

		[...Array(numOfAsteroids)].forEach(addNewAsteroid);
	};

	const add = object => {
		return {
			to: groupName => {
				groups[groupName].push(object);
			}
		};
	};

	const addToScore = value => {
		if (groups.playerShip.length > 0) {
			setState(prevState => ({
				...prevState,
				score: prevState.score + value
			}));
		}
	};

	const updateAllObjects = () => {
		Object.keys(groups).forEach(groupName => {
			updateGroup(groups[groupName]);
		});
	};

	const clearAllGroups = () => {
		Object.keys(groups).forEach(groupName => {
			groups[groupName].length = 0;
		});
	};

	const updateGroup = group => {
		group.forEach((object, index) => {
			checkCollisions(object);

			if (object.markedForDeletion) {
				group.splice(index, 1);
			} else {
				object.update(state);
			}
		});
	};

	const checkCollisions = object => {
		if (object.collidesWith && object.collidesWith.length) {
			object.collidesWith.forEach(groupName => {
				groups[groupName].forEach(object2 => {
					if (isCollision(object, object2)) {
						object.delete();
						object2.delete();
					}
				});
			});
		}
	};

	const update = () => {
		const {
			context,
			viewport: { width, height }
		} = state;

		if (context) {
			const grd = context.createLinearGradient(0, 0, 0, height);
			grd.addColorStop(0, '#18013f');
			grd.addColorStop(1, '#0d0025');

			context.fillStyle = grd;
			context.fillRect(0, 0, width, height);
		}

		updateAllObjects();

		requestId.current = requestAnimationFrame(update);
	};

	return (
		<div className="game">
			<GameBackground />

			{!playing && !gameOver && <TitleScreen type="game-start" />}
			{gameOver && <TitleScreen type="game-over" />}

			{(playing || gameOver) && <div className="game__score">{score}</div>}

			<canvas
				className="game__canvas"
				ref={canvasRef}
				width={viewport?.width * viewport?.pixelRatio}
				height={viewport?.height * viewport?.pixelRatio}
			/>
		</div>
	);
};

export default Game;
