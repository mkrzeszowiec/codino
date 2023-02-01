import { Product } from 'types/common';

const ZIPZERO: Product = {
	title: 'Zipzero mobile app',
	description: 'Cashback app to pay household bills',
	imageSource: '/images/case-study/zipzero/cover.png',
	slug: 'zipzero',
	color: '#2c368a',
	date: '2019 - now',
	countries: ['GBR'],
	scopeOfTechnology: 'achitecture, backend, mobile app, ML for fraud detection, backoffice panel',
	industry: 'cashback, shopping',
	scopeOfWork: {
		description:
			'The system was built from scratch in 100% by our team. Creating a backend, a mobile application, ML for fraud detection, a backoffice panel',
		points: [
			{ index: 1, description: 'Creating an entire system from scratch' },
			{ index: 2, description: 'Designing the system architecture' },
			{ index: 3, description: 'Integrations with external affiliate networks' },
			{ index: 4, description: 'Backend in microservices architecture' },
			{ index: 5, description: 'Mobile app for android' },
			{ index: 6, description: 'Administration panel to manage the system' },
			{ index: 7, description: 'B2B Panel' }
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
