import { Product } from 'types/common';

const GIVEO: Product = {
	title: 'Giveo - Mobile app',
	shortDescription:
		'Giveo is cashless donation fundraising and marketplace platform that supports great causes with every transaction made in the app. https://giveo.app',
	description:
		'Our software architects and developers have been working on a powerful and scalable online auction platform. The platform allows charity auctions to be held for selected causes. The user can add an item that is auctioned off and the proceeds from the sale go entirely to charity. Great emphasis was placed not only on the scalability of the system, but also on intuitiveness and end-user friendliness.',
	imageSource: '/images/case-study/giveo/cover.png',
	slug: 'giveo',
	color: '#6674b6',
	date: '2020-2021',
	countries: ['USA', 'CAN'],
	scopeOfTechnology: 'auctions, sales',
	industry: 'architecture, backend, frontend',
	scopeOfWork: {
		description: `A software architect from our team prepared a backend design in a microservices architecture. Due to the planned high load on the system, the architecture had to be highly scalable. The backend was designed by people from our team and the execution was handled by the client's internal team. Our team was also responsible for the design and execution of an extensive frontend application, optimized for mobile devices.`,
		points: [
			{
				index: 1,
				description: 'designing a backend in microservices architecture'
			},
			{
				index: 2,
				description: 'frontend application architecture design'
			},
			{
				index: 3,
				description: 'microservices frontend application development'
			}
		]
	},
	technologies: ['react', 'java', 'spring', 'postgresql', 'elastic', 'android', 'ios']
};

export default GIVEO;
