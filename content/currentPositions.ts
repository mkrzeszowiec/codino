import { Position } from 'types/common';

export const CURRENT_POSITIONS: Position[] = [
	{
		title: 'Backend Developer',
		description:
			'Odpowiada za projektowanie i implementację serwerowej części aplikacji, zapewniając bezpieczeństwo, skalowalność i efektywność działania systemu.',
		shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		slug: 'backend',
		scope: 'Lorem ipsum, lorem ipsum, lorem ipsum',
		technologies: ['java', 'spring', 'hibernate', 'node', 'kubernetes', 'postgresql']
	},
	{
		title: 'Devops Engineer',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		slug: 'devops',
		scope: 'Lorem ipsum',
		technologies: ['docker', 'redis', 'kubernetes', 'postgresql', 'aws', 'hibernate', 'elastic']
	},
	{
		title: 'Frontend Developer',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque mauris ut risus efficitur, sed molestie purus rutrum. Suspendisse varius lorem ac dictum facilisis.',
		shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		slug: 'frontend',
		scope: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		technologies: ['react', 'angular', 'ts', 'kotlin', 'android', 'ios']
	}
];
