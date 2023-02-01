import { Product } from 'types/common';

const GIVEO: Product = {
	title: 'Giveo - Mobile app',
	description:
		'Giveo is cashless donation fundraising and marketplace platform that supports great causes with every transaction made in the app. https://giveo.app',
	imageSource: '/images/case-study/giveo/cover.png',
	slug: 'giveo',
	color: '#6674b6',
	date: '2020-2021',
	countries: ['USA', 'CAN'],
	scopeOfTechnology: 'auctions, sales',
	industry: 'architecture, backend, frontend',
	scopeOfWork: {
		description: '',
		points: [
			{
				index: 1,
				description: 'Preparation of the system architecture - backend microservices'
			},
			{
				index: 2,
				description: "Implementation of backend services, together with the client's internal team"
			},
			{
				index: 3,
				description: 'Supervision and assistance in implementing a frontend application in react native'
			}
		]
	},
	goals: '',
	technologies: ['react', 'java', 'spring', 'postgresql', 'elastic', 'android', 'ios'],
	solutions: [
		{
			title: 'Solution 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/giveo/1.png'
		},
		{
			title: 'Solution 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/giveo/2.png'
		}
	]
};

export default GIVEO;
