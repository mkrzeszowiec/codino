import { calculateVector, TypeOfGameObject } from 'components/game/utils';
import { colors } from 'utils/colors';

class Bullet {
	radius: number;
	position: { x: number; y: number };
	direction: any;
	velocity: { x: number; y: number };
	markedForDeletion: boolean;
	collidesWith: string[];

	constructor({ position, direction, shipSpeed }) {
		const speed = shipSpeed + 8;

		this.radius = 4;
		this.position = position;
		this.direction = direction;
		this.velocity = calculateVector(speed, this.direction);
		this.markedForDeletion = false;
		this.collidesWith = [TypeOfGameObject.asteroids];
	}

	delete() {
		this.markedForDeletion = true;
	}

	update(state) {
		const { context, viewport } = state;

		this.updatePosition(viewport);
		this.draw(context);
	}

	draw(context) {
		context.save();
		context.translate(this.position.x, this.position.y);
		context.fillStyle = colors.primaryLight;
		context.beginPath();
		context.arc(0, 0, this.radius, 0, 2 * Math.PI);
		context.closePath();
		context.fill();
		context.restore();
	}

	updatePosition(viewport) {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		// delete bullet if it goes off screen
		if (
			this.position.x > viewport.width ||
			this.position.x < 0 ||
			this.position.y > viewport.height ||
			this.position.y < 0
		) {
			this.delete();
		}
	}
}

export default Bullet;
