import { Product } from 'types/common';

export const ZIPZERO: Product = {
	title: 'Aplikacja mobilna Zipzero',
	description: 'Aplikacja typu cashback do opłacania domowych rachunków',
	imageSource: '/images/portfolio/zipzero.png',
	slug: 'zipzero',
	color: '#2c368a',
	date: '2019 - teraz',
	scopeOfTechnology: 'achitektura, backend, aplikacja mobilna, ML do wykrywania fraudów, panel backoffice',
	industry: 'system cashback',
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
	technologies: ['java', 'kotlin']
};
