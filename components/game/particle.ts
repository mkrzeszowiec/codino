import { colors } from 'utils/colors';

class Particle {
	inertia = 0.98;

	private position: { x: number; y: number };
	private velocity: { x: number; y: number };
	private radius: number;
	private timeToLive: number;
	private markedForDeletion: boolean;

	constructor({ position, velocity, radius, timeToLive }) {
		this.position = position;
		this.velocity = velocity;
		this.radius = radius;
		this.timeToLive = timeToLive;
		this.markedForDeletion = false;
	}

	delete() {
		this.markedForDeletion = true;
	}

	update(state) {
		const { context } = state;

		this.updateVelocity();
		this.updatePosition();
		this.updateSize();
		this.updateTimeToLive();

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

	updateVelocity() {
		this.velocity.x *= this.inertia;
		this.velocity.y *= this.inertia;
	}

	updatePosition() {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}

	updateSize() {
		if (this.radius > 0.1) {
			this.radius -= 0.1;
		} else {
			this.radius = 0.1;
		}
	}

	updateTimeToLive() {
		if (this.timeToLive <= 0) {
			this.delete();
		} else {
			this.timeToLive -= 1;
		}
	}
}

export default Particle;
