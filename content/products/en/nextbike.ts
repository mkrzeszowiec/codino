import { Product } from 'types/common';

const NEXTBIKE: Product = {
	title: 'Nextbike - Backend works',
	description: 'Rescue and development of a system serving urban bicycles. https://nextbike.pl',
	imageSource: '/images/portfolio/next-bike.png',
	slug: 'nextbike',
	color: '#0f84d0',
	date: '2020-2022',
	scopeOfTechnology: 'backend development, system architecture redesign',
	industry: 'rental, bicycle transportation, public services',
	scopeOfWork: {
		description: '',
		points: [
			{ index: 1, description: 'create new services that will take the load off the existing service' },
			{ index: 2, description: 'design and develop APIs for new mobile applications' },
			{ index: 3, description: 'maintenance and development of existing systems' }
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
