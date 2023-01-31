import { Product } from 'types/common';

const INSIGHTS: Product = {
	title: 'Insights - An analytics project for the aviation industry.',
	description:
		'Establish and develop a system for airline passenger analysis, create a passenger identification system.',
	imageSource: '/images/case-study/insights/cover.png',
	slug: 'insights',
	color: '#1f4cea',
	date: '2017-2021',
	scopeOfTechnology: 'backend, frontend',
	industry: 'airlines, analytics',
	technologies: ['java', 'spring', 'angular', 'elastic', 'teradata'],
	scopeOfWork: {
		description: '',
		points: [
			{
				index: 1,
				description: `Creating a system for analysis and visualization: <br/> - passenger behavior in airlines <br/>- visualization of passenger data: flights, tickets, reservations`
			},
			{
				index: 2,
				description: 'Creation of a system to conduct audits and risk analysis on airline routes'
			},
			{
				index: 3,
				description: 'create a system to identify and unify passenger data from multiple sources'
			}
		]
	},
	solutions: [
		{
			title: 'Solution 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/insights/1.png'
		},
		{
			title: 'Solution 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/insights/2.png'
		}
	]
};

export default INSIGHTS;
