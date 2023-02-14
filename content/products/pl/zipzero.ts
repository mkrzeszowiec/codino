import { Product } from 'types/common';

const ZIPZERO: Product = {
	title: 'Aplikacja mobilna ZipZero',
	shortDescription:
		'ZipZero to aplikacja zakupowa z pozwalająca na zbieranie środków z zakupów do opłacania miesięcznych domowych rachunków.',
	description:
		'Zipezero to aplikacja zakupowa z pozwalająca na zbieranie środków z zakupów do opłacania miesięcznych domowych rachunków. Użytkownicy dostają nagrody poprzez podzielenie się swoimi paragonami zakupowymi, lub szczegółami zakupów online. Platforma nagradza użytkowników za każde zakupy, a specjalne oferty premium pozwalają na jeszcze większe oszczędności. ' +
		'\n\nAplikacja działa na rynku brytyjskim od 4 lat i jest używana przez setki tysięcy użytkowników dziennie. ',
	imageSource: '/images/case-study/zipzero/cover.png',
	slug: 'zipzero',
	color: '#2c368a',
	date: '2019 - teraz',
	countries: 'uk',
	scopeOfTechnology: 'achitektura, backend, aplikacja mobilna, ML do wykrywania fraudów, panel backoffice',
	industry: 'system cashback',
	scopeOfWork: {
		description:
			'The beginning of the project was many hours of planning and analysis sessions on the domain and architecture of the new system we were tasked with creating.' +
			' The main objectives of the system were to be able to process thousands of transactions a day, an easy-to-use and transparent mobile application and an administration panel that allows easy management of the entire system.',
		points: [
			{
				index: 1,
				description:
					'Preparing a roadmap and initial architecture under the MVP which was to be implemented after a few months of work'
			},
			{
				index: 2,
				description:
					'Design the system architecture based on microservices architecture to ensure scalability and the ability for independent teams of dgrammers to work on multiple parts of the system'
			},
			{
				index: 3,
				description:
					'Design a database and warehouse that will be able to store millions of transactions, products and purchases'
			},
			{ index: 4, description: 'Integrations with external affiliate networks' },
			{ index: 5, description: 'Mobile application for android' },
			{ index: 6, description: 'Administration panel for system management' },
			{ index: 7, description: 'Fraud and abuse protection system based on machine learning' }
		]
	},
	technologies: ['java', 'spring', 'kotlin', 'angular', 'postgresql', 'redis', 'elastic', 'android', 'kubernetes'],
	solutions: [
		{
			title: 'Rozwiązanie 1',
			description:
				'1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/zipzero/1.png'
		},
		{
			title: 'Rozwiązanie 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/zipzero/2.png'
		}
	]
};

export default ZIPZERO;
