import { Product } from 'types/common';

const NEXTBIKE: Product = {
	title: 'Nextbike - Backend',
	shortDescription:
		'Nextbike is the most popular bicycle rental platform in Poland, operating in most major cities in Poland.',
	description:
		'Nextbike is the most popular bicycle rental platform in Poland, operating in most major cities in Poland. ' +
		'Users using a mobile application, for a small fee, can rent a bicycle available at one of hundreds of stations located at strategic points in each city. The project is very interesting due to the scale of the operation, the requirements of the reliability guarantee and the client`s desire to improve and modernize the current architecture.',
	imageSource: '/images/case-study/nextbike/cover.png',
	slug: 'nextbike',
	color: '#0f84d0',
	date: '2020-2022',
	countries: 'pl',
	scopeOfTechnology: 'backend development, system architecture redesign',
	industry: 'rental, bicycle transportation, public services',
	scopeOfWork: {
		description:
			'The main objective of our work at nextbike polska was to maintain and develop existing systems, organize the architecture and gradually introduce new services and functionalities.' +
			'\n\nOur scope of work:',
		points: [
			{ index: 1, description: 'Development of systems for reporting and monitoring of bicycles and bicycle stations' },
			{ index: 2, description: 'Design and implementation of a clear API for new mobile applications' },
			{ index: 3, description: 'Design and implementation of a new authorization and authentication system' },
			{ index: 4, description: 'Implementation of a new way to retrieve data from base stations' }
		]
	},
	technologies: ['node', 'php', 'mongodb', 'ts'],
	solutions: [
		{
			title: 'Solution 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/nextbike/1.png'
		},
		{
			title: 'Solution 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/nextbike/2.png'
		}
	]
};

export default NEXTBIKE;
