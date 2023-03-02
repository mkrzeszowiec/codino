import { JobOffer } from 'types/common';

export const JOB_OFFERS_EN: JobOffer[] = [
	{
		title: 'Full-stack developer',
		slug: 'fullstack-developer',
		description:
			'Our basic requirement is the ability to develop applications in REACT + knowledge of Node.js and willingness to learn new things.',
		mode: 'hybrid',
		payRanges: 'todo (B2B)',
		experienceLevel: 'mid',
		roleAndResponsibilities: [
			'creating a complex frontend application based on React',
			'development of a complex backend application based on Node.js in microservices architecture',
			'design and development of new application modules',
			'writing business logic'
		],
		requirements: ['React', 'TypeScript', 'Node.js', 'CSS/HTML', 'GIT', 'REST', 'ability to write "clean code"']
	},
	{
		title: 'Backend developer',
		slug: 'backend-developer',
		description:
			'Our basic requirement is very good knowledge of TypeScript and Node.js and also openness to new things (primarily microservices architecture).',
		mode: 'hybrid',
		payRanges: 'todo (B2B)',
		experienceLevel: 'mid, senior',
		roleAndResponsibilities: [
			'developing a complex Node.js-based backend application in a microservices architecture',
			'designing and executing new modules of the application',
			'writing business logic'
		],
		requirements: [
			'Node.js ',
			'Docker, kubernetes, AWS/GCP',
			'RabbitMQ/Kafka',
			'SQL (PostgreSQL), NoSql (MongoDB), Elastic, Redis',
			'Git, Gradle',
			'Knowledge of developing complex applications in microservices architecture',
			'ability to write "clean code"'
		]
	}
];
