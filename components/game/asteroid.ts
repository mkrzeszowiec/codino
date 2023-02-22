import {
	getRandomNum,
	degreesToRadians,
	createExplosion,
	calculateMagnitude,
	calculateVector,
	TypeOfGameObject
} from 'components/game/utils';
import { colors } from 'utils/colors';

const createAsteroidGeometry = radius => {
	const numOfPoints = Math.round(getRandomNum(6, 10));

	const points = [];

	[...Array(numOfPoints)].forEach((_, i) => {
		const point = {
			x: Math.sin(degreesToRadians((i * 360) / numOfPoints)) * getRandomNum(0.5, 1) * radius,
			y: Math.cos(degreesToRadians((i * 360) / numOfPoints)) * getRandomNum(0.5, 1) * radius
		};
		points.push(point);
	});

	return points;
};

class Asteroid {
	radius: number;
	position: { x: number; y: number };
	velocity: { x: number; y: number };
	add: any;
	addToScore: any;
	direction: number;
	rotationSpeed: number;
	points: any[];
	markedForDeletion: boolean;

	constructor({ position, radius, velocity, add, addToScore }) {
		this.position = position;
		this.radius = radius || 100;
		this.velocity = velocity || {
			x: getRandomNum(-1, 1),
			y: getRandomNum(-1, 1)
		};
		this.add = add;
		this.addToScore = addToScore;
		this.direction = 0;
		this.rotationSpeed = getRandomNum(-1, 1);
		this.points = createAsteroidGeometry(this.radius);
		this.markedForDeletion = false;
	}

	delete() {
		this.markedForDeletion = true;
		this.addToScore(this.getScoreValue());

		createExplosion({
			numParticles: Math.floor(this.radius),
			position: this.position,
			radius: this.radius,
			add: this.add
		});

		if (this.radius > 10) {
			[...Array(2)].forEach(() => {
				const child = this.createChildAsteroid();
				this.add(child).to(TypeOfGameObject.asteroids);
			});
		}
	}

	update(state) {
		const { context, viewport } = state;

		this.updateDirection();
		this.updatePosition(viewport);

		this.draw(context);
	}

	draw(context) {
		if (context) {
			context.save();
			context.translate(this.position.x, this.position.y);
			context.rotate(degreesToRadians(this.direction));
			context.strokeStyle = colors.white;
			context.lineWidth = 2;
			context.beginPath();
			this.points.forEach((point, index) => {
				if (index === 0) {
					context.moveTo(point.x, point.y);
				} else {
					context.lineTo(point.x, point.y);
				}
			});
			context.closePath();
			context.stroke();
			context.restore();
		}
	}

	updateDirection() {
		this.direction += this.rotationSpeed;
		if (this.direction >= 360) {
			this.direction -= 360;
		}
		if (this.direction < 0) {
			this.direction += 360;
		}
	}

	updatePosition(viewport) {
		const { width, height } = viewport;

		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		if (this.position.x > width) {
			this.position.x = 0;
		} else if (this.position.x < 0) {
			this.position.x = width;
		}

		if (this.position.y > height) {
			this.position.y = 0;
		} else if (this.position.y < 0) {
			this.position.y = height;
		}
	}

	createChildAsteroid() {
		const position = {
			x: this.position.x + getRandomNum(-5, 5),
			y: this.position.y + getRandomNum(-5, 5)
		};
		const radius = this.radius / 2;
		const speed = calculateMagnitude(this.velocity) + 0.25;
		const direction = getRandomNum(0, 360);
		const velocity = calculateVector(speed, direction);

		return new Asteroid({
			position,
			radius,
			velocity,
			add: this.add,
			addToScore: this.addToScore
		});
	}

	getScoreValue() {
		return Math.round(1000 / this.radius);
	}
}

export default Asteroid;
