import { Product } from 'types/common';

const GIVEO: Product = {
	title: 'Giveo - Aplikacja mobilna',
	shortDescription:
		'Aplikacja aukcyjna do zbierania funduszy na cele charytatywne. Szczegółowy opis tutaj: https://giveo.app/',
	description:
		'Nasi architekci oprogramowania oraz developerzy pracowali nad rozbudowaną i skalowalną platformą do aukcji internetowych. Platforma umożliwia przeprowadzania charytatywnych aukcji na rzecz wybranych celów. Użytkownik może dodać przedmiot, który jest licytowany a dochód ze sprzedaży w całości trafia na cele charytatywne. Duży nacisk kładziony był nie tylko na skalowalność systemu, ale również na intuicyjność i przyjazność dla użytkownika końcowego. ',
	imageSource: '/images/case-study/giveo/cover.png',
	slug: 'giveo',
	color: '#6674b6',
	date: '2020-2021',
	countries: ['USA', 'CAN'],
	scopeOfTechnology: 'aukcje, sprzedaż',
	industry: 'architektura, backend, frontend',
	scopeOfWork: {
		description:
			'Architekt oprogramowania z naszego zespołu przygotował projekt backendu w architekturze mikroserwisów. Ze względu na planowane duże obciążenie systemu, architektura musiała być wysoce skalowalna. Backend został zaprojektowany przez osoby z naszego zespołu a wykonaniem zajął się wewnętrzny team klienta. Nasz zespół odpowiadał również za zaprojektowanie oraz wykonanie rozbudowanej aplikacji frontendowej, zoptymalizowanej na urządzenia mobilne.',
		points: [
			{
				index: 1,
				description: 'zaprojektowanie backendu w architekturze mikroserwisów'
			},
			{
				index: 2,
				description: 'projekt architektury aplikacji frontendowej'
			},
			{
				index: 3,
				description: 'wykonanie aplikacji frontendowej mikroserwisów'
			}
		]
	},
	technologies: ['react', 'java', 'spring', 'postgresql', 'elastic', 'android', 'ios']
};

export default GIVEO;
