import { Product } from 'types/common';

const INSIGHTS: Product = {
	title: 'Insights - Projekt analityczny dla branży lotniczej.',
	description:
		'Stworzenie i rozwój systemu do analizy pasażerów linii lotniczych, stworzenie systemu identyfikacji pasażerów.',
	imageSource: '/images/case-study/insights/cover.png',
	slug: 'insights',
	color: '#1f4cea',
	date: '2017-2021',
	scopeOfTechnology: 'backend, frontend',
	industry: 'linie lotnicze, analityka',
	countries: ['USA', 'PAN'],
	technologies: ['java', 'spring', 'angular', 'elastic', 'teradata'],
	scopeOfWork: {
		description: '',
		points: [
			{
				index: 1,
				description: `stworzenie systemu do analizy i wizualizacji: <br/> - zachowań pasażerów w liniach lotniczych <br/>- wizualizacji danych pasazerów: lotów, biletów, rezerwacji`
			},
			{
				index: 2,
				description:
					'stworzenie systemu do przeprowadzania audytów i analizy ryzyk na połączeniach w liniach lotniczych'
			},
			{
				index: 3,
				description: 'stworzenie systemu do identyfikacji i unifikacji danych pasażerów z wielu źródeł'
			}
		]
	},
	solutions: [
		{
			title: 'Rozwiązanie 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/insights/1.png'
		},
		{
			title: 'Rozwiązanie 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/insights/2.png'
		}
	]
};

export default INSIGHTS;
