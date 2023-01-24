import { JobOffer } from 'types/common';

export const JOB_OFFERS: JobOffer[] = [
	{
		title: 'Senior Java Developer',
		slug: 'senior-java-developer',
		description: 'Opis stanowiska dla senior java developera, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		mode: 'remote',
		payRanges: '10000zł - 15000',
		experienceLevel: 'senior',
		roleAndResponsibilities: ['punkt 1', 'punkt 2'],
		requirements: ['java', 'spring']
	},
	{
		title: 'Frontend developer',
		slug: 'frontend-developer',
		description: 'Opis stanwiska dla frontenda ',
		mode: 'hybrid',
		payRanges: '10000zł - 15000',
		experienceLevel: 'senior',
		roleAndResponsibilities: ['punkt 1', 'punkt 2'],
		requirements: ['react', 'angular']
	},
	{
		title: 'NodeJs developer',
		slug: 'node-js-developer',
		description: 'Opis dasdasd',
		mode: 'hybrid',
		payRanges: '10000zł - 15000',
		experienceLevel: 'mid',
		roleAndResponsibilities: ['punkt 1', 'punkt 2'],
		requirements: ['lorem 1', 'lorem 2']
	}
];
