import Particle from 'components/game/particle';

enum TypeOfGameObject {
	playerShip = 'playerShip',
	asteroids = 'asteroids',
	bullets = 'bullets',
	particles = 'particles'
}

const calculateMagnitude = (vector): number => {
	const { x, y } = vector;
	const xSquared = x ** 2;
	const ySquared = y ** 2;

	return Math.sqrt(xSquared + ySquared);
};

const limitMagnitude = (vector, limit): { x: number; y: number } => {
	const { x, y } = vector;
	const magnitude = calculateMagnitude(vector);

	if (magnitude > limit) {
		const ratio = limit / magnitude;
		return {
			x: x * ratio,
			y: y * ratio
		};
	}
	return vector;
};

const degreesToRadians = (degrees: number): number => (degrees * Math.PI) / 180;

const rotatePoint = (point: { x: number; y: number }, angle: number): { x: number; y: number } => {
	const { x, y } = point;
	const angleRadians = degreesToRadians(angle);

	// x' = xcosθ − ysinθ
	// y' = ycosθ + xsinθ
	return {
		x: x * Math.cos(angleRadians) - y * Math.sin(angleRadians),
		y: y * Math.cos(angleRadians) + x * Math.sin(angleRadians)
	};
};

const calculateVector = (magnitude: number, direction: number): { x: number; y: number } => {
	const directionRadians = degreesToRadians(direction);
	const x = magnitude * Math.cos(directionRadians);
	const y = magnitude * Math.sin(directionRadians);

	return { x, y };
};

const getRandomNum = (min: number, max: number): number => Math.random() * (max - min) + min;

const createExplosion = ({ numParticles, position, radius, add }) => {
	[...Array(numParticles)].forEach(() => {
		const particle = new Particle({
			position: {
				x: position.x + getRandomNum(-radius / 4, radius / 4),
				y: position.y + getRandomNum(-radius / 4, radius / 4)
			},
			velocity: {
				x: getRandomNum(-1.5, 1.5),
				y: getRandomNum(-1.5, 1.5)
			},
			radius: getRandomNum(1, 3),
			timeToLive: getRandomNum(20, 60)
		});

		add(particle).to(TypeOfGameObject.particles);
	});
};

const isCollision = (object1, object2): boolean => {
	if (!object1 || !object2) {
		return false;
	}

	const distanceVector = {
		x: object1.position.x - object2.position.x,
		y: object1.position.y - object2.position.y
	};
	const distance = calculateMagnitude(distanceVector);
	const radiusSum = object1.radius + object2.radius;

	return distance < radiusSum;
};

export {
	calculateMagnitude,
	limitMagnitude,
	degreesToRadians,
	rotatePoint,
	calculateVector,
	getRandomNum,
	createExplosion,
	isCollision,
	TypeOfGameObject
};
