import { Product } from 'types/common';

const AXISROOMS: Product = {
	title: 'Axisrooms CRS',
	shortDescription:
		'Axisrooms Central Reservation System is a powerful system for managing hotel and apartment chains operating in India.',
	description:
		'Axisrooms Central Reservation System is a powerful system for managing hotel and apartment chains operating in India. The software allows you to configure all hotel parameters starting from basic data like number and types of available rooms, price lists, reservation and cancellation policies, meal plans, taxes, add-on packages, promotions. In addition, the system has its own reservation system that allows employees to add reservations on the spot and synchronize with external reservation providers such as Booking.com',
	imageSource: '/images/case-study/axisrooms/cover.png',
	slug: 'axisrooms',
	color: '#ea1f61',
	date: '-',
	countries: ['IND'],
	scopeOfTechnology: '-',
	scopeOfWork: {
		description: `The goal of our team was to prepare the entire backend and frontend from scratch according to the documentation provided to us. Working on the project was 3 years of development and constant communication with the client's analysts and testers to deliver the highest quality product.
		\n\n Our scope of work: `,
		points: [
			{
				index: 1,
				description:
					'detailed understanding of the hospitality domain and complete design of the backend and frontend architecture'
			},
			{
				index: 2,
				description:
					'Design and implementation of a frontend to easily and transparently handle the complex aspects of hotel and reservation management'
			},
			{
				index: 3,
				description:
					'Design and implementation of a scalable backend allowing to handle thousands of hotels and their reservations'
			},
			{
				index: 4,
				description:
					'Design a heuristic for handling reservations that allows for optimal distribution of hotel guests by available rooms'
			},
			{
				index: 5,
				description: 'Integrations with customer systems providing booking information from external systems'
			}
		]
	},
	industry: 'tourism, crm'
};

export default AXISROOMS;
