import { Product } from 'types/common';

const NEXTBIKE: Product = {
	title: 'Nextbike - Backend works',
	description: 'Rescue and development of a system serving urban bicycles. https://nextbike.pl',
	imageSource: '/images/portfolio/next-bike.png',
	slug: 'nextbike',
	color: '#0f84d0',
	date: '2020-2022',
	scopeOfTechnology: 'backend development, system architecture redesign',
	industry: '-',
	scopeOfWork: {
		description: '',
		points: [
			{ index: 1, description: 'stworzyć nowe serwisy które zdejmą obciążenie z istniejącego serwisu' },
			{ index: 2, description: 'zaprojektować i stworzyć API dla nowych aplikacji mobilnych' },
			{ index: 3, description: 'utrzymanie i rozwój istniejących systemów' }
		]
	}
};

export default NEXTBIKE;
