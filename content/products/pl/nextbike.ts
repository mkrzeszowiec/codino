import { Product } from 'types/common';

export const NEXTBIKE: Product = {
	title: 'Nextbike - Prace backendowe',
	description: 'Ratunek i rozwój systemu obsługującego miejskie rowery. https://nextbike.pl',
	imageSource: '/images/portfolio/next-bike.png',
	slug: 'nextbike',
	color: '#0f84d0',
	date: '2020-2022',
	scopeOfTechnology: 'rozwój backendu, redesign architektury systemu',
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
