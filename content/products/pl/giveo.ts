import { Product } from 'types/common';

const GIVEO: Product = {
	title: 'Giveo - Aplikacja mobilna',
	description:
		'Aplikacja aukcyjna do zbierania funduszy na cele charytatywne. Szczegółowy opis tutaj: https://giveo.app/',
	imageSource: '/images/case-study/giveo/cover.png',
	slug: 'giveo',
	color: '#6674b6',
	date: '2020-2021',
	countries: ['USA', 'CAN'],
	scopeOfTechnology: 'aukcje, sprzedaż',
	industry: 'architektura, backend, frontend',
	scopeOfWork: {
		description: '',
		points: [
			{
				index: 1,
				description: 'Przygotowanie architektury systemu - backend mikroserwisy'
			},
			{
				index: 2,
				title: 'Praca drużynowa',
				description: 'Implementacja backendowych serwisów, wspólnie z wewnętrzym teamem klienta'
			},
			{
				index: 3,
				title: 'Praca drużynowa',
				description: 'Nadzorowanie i pomoc w implementacji aplikacji frontendowej w react native'
			}
		]
	},
	goals: '',
	technologies: ['react', 'java', 'spring', 'postgresql', 'elastic', 'android', 'ios'],
	solutions: [
		{
			title: 'Rozwiązanie 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/giveo/1.png'
		},
		{
			title: 'Rozwiązanie 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/giveo/2.png'
		}
	]
};

export default GIVEO;
