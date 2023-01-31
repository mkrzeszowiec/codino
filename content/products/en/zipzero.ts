import { Product } from 'types/common';

const ZIPZERO: Product = {
	title: 'Zipzero mobile app',
	description: 'Cashback app to pay household bills',
	imageSource: '/images/portfolio/zipzero.png',
	slug: 'zipzero',
	color: '#2c368a',
	date: '2019 - now',
	scopeOfTechnology: 'achitecture, backend, mobile app, ML for fraud detection, backoffice panel',
	industry: 'cashback',
	scopeOfWork: {
		description:
			'System postawiony od zera w 100% przez nas zespół. Stworzenie backendu, aplikacji mobilnej, ML do wykrywania fraudów, panelu backoffice',
		points: [
			{ index: 1, description: 'Stworzenie całego systemu od zera' },
			{ index: 2, description: 'Zaprojektowanie architektury systemu' },
			{ index: 3, description: 'Integracje z zewnętrznymi sieciami afiliacyjnymi' },
			{ index: 4, description: 'Backend w architekturze mikroserwisów' },
			{ index: 5, description: 'Backend w architekturze mikroserwisów' },
			{ index: 6, description: 'Aplikacja moblina na androida' },
			{ index: 7, description: 'Panel administracyjny do zarządzania systemem' },
			{ index: 8, description: 'Panel B2B' }
		]
	},
	technologies: ['java', 'spring', 'kotlin', 'angular', 'postgresql', 'redis', 'elastic', 'android', 'kubernetes'],
	solutions: [
		{
			title: 'Solution 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/zipzero/1.png'
		},
		{
			title: 'Solution 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/zipzero/2.png'
		}
	]
};

export default ZIPZERO;
