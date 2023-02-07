import { JobOffer } from 'types/common';

export const JOB_OFFERS_PL: JobOffer[] = [
	{
		title: 'Full-stack developer',
		slug: 'fullstack-developer',
		description:
			'Nasze podstawowe wymaganie to umiejętność tworzenia aplikacji w REACT + znajomość Node.js oraz chęć nauki nowych rzeczy.',
		mode: 'hybrydowa',
		payRanges: 'todo (B2B)',
		experienceLevel: 'mid',
		roleAndResponsibilities: [
			'tworzeniem rozbudowanej aplikacji frontendowej opartej o React',
			'tworzeniem rozbudowanej aplikacji backendowej opartej na Node.js w architekturze mikroserwisów',
			'projektowaniem i wykonywaniem nowych modułów aplikacji',
			'pisaniem logiki biznesowej'
		],
		requirements: ['React', 'TypeScript', 'Node.js', 'CSS/HTML', 'GIT', 'REST', 'umiejętność pisania "czystego kodu"']
	},
	{
		title: 'Backend developer',
		slug: 'backend-developer',
		description:
			'Nasze podstawowe wymaganie to bardzo dobra znajomość TypeScript oraz Node.js a także otwartość na nowe rzeczy (przede wszystkim architekturę mikroserwisów).',
		mode: 'hybrydowa',
		payRanges: 'todo (B2B)',
		experienceLevel: 'mid, senior',
		roleAndResponsibilities: [
			'tworzeniem rozbudowanej aplikacji backendowej opartej na Node.js w architekturze mikroserwisów',
			'projektowaniem i wykonywaniem nowych modułów aplikacji',
			'pisaniem logiki biznesowej'
		],
		requirements: [
			'Node.js ',
			'Docker, kubernetes, AWS/GCP',
			'RabbitMQ/Kafka',
			'SQL (PostgreSQL), NoSql (MongoDB), Elastic, Redis',
			'Git, Gradle',
			'wiedza z zakresu tworzenia rozbudowanych aplikacji w architekturze mikroserwisów',
			'umiejętność pisania "czystego kodu"'
		]
	}
];
