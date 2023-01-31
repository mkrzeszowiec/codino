import { Product } from 'types/common';

const GIVEO: Product = {
	title: 'Giveo - Aplikacja mobilna',
	description:
		'Aplikacja aukcyjna do zbierania funduszy na cele charytatywne. Szczegółowy opis tutaj: https://giveo.app/',
	imageSource: '/images/portfolio/giveo.png',
	slug: 'giveo',
	color: '#6674b6',
	date: '2020-2021',
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
	goals:
		'Nieustanny rozwój aplikacji frontendu oraz backendu mają jeden cel - stale ulepszać wysokoskalowalny system do transmisji video z potencjalnym milionem widzów w piku. Odpowiednie projektowanie architektury systemu zapewnia jego skalowalność, co jest szczególnie istotne w przypadku streamingu - bursty traffic.\n\n' +
		'Stale pracujemy nad wiarygodnymi testami wydajności systemu, aby każdy update zapewniał jeszcze wyższą jakość. Opracowujemy także rozwiązania pod hurtownie danych. Praca w międzynarodowym teamie sprawia, że każdy z członków naszego zespołu ma swoje własne spojrzenie na projekt - dzięki temu Recast nieustannie się rozwija i ewoluuje.\n\n' +
		'Warto zaznaczyć w tym miejscu, że w projekt zaangażowane są topowe kluby piłkarskie, takie jak Manchester City, czy Inter Mediolan. Skalowalność Recast’a  pozwala obsługiwać duże piki ruchu  w trakcie topowych wydarzeń sportowych.\n',
	technologies: ['react', 'android', 'ios'],
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