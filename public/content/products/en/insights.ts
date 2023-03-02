import { Product } from 'types/common';

const INSIGHTS: Product = {
	title: 'Insights - An analytics project for the aviation industry',
	shortDescription:
		'Insights is a web-based tool that simplifies and accelerates airline research and analysis activities.',
	description:
		'A team of our developers created the Insights project. It is a web-based tool that simplifies and speeds up airline research and analysis activities. It allows easy search and navigation without writing complex SQL queries. In addition, the tool detects and tracks risks, facilitates risk management and auditing to generate additional value for airlines. The system has been in operation for several years and is regularly used by analysts.',
	imageSource: '/images/case-study/insights/cover.png',
	slug: 'insights',
	color: '#1f4cea',
	date: '2017-2021',
	scopeOfTechnology: 'backend, frontend',
	industry: 'airlines, analytics',
	countries: ['USA', 'PAN'],
	technologies: ['java', 'spring', 'angular', 'elastic', 'teradata'],
	scopeOfWork: {
		description:
			'Our team designed and then executed the entire system. The backend was made in Java/Spring technology based on microservices architecture. The main purpose of the system was to enable processing of large data sets from airline databases. The results of the system are presented in the form of graphs and various types of statistics.' +
			'\n\n Our scope of work:',
		points: [
			{
				index: 1,
				description: ` backend design based on microservices architecture`
			},
			{
				index: 2,
				description: `design of frontend application for visualization of analytical data related to passengers, flights, audits, risks`
			},
			{
				index: 3,
				description:
					'execution of a complex front-end application for presenting the results of backend operations and managing airline risks, among other things'
			},
			{
				index: 4,
				description: 'continuous improvement of the system according to the needs of analysts'
			},
			{
				index: 5,
				description:
					'development of an algorithm to identify and unify passengers based on residual data from different systems'
			}
		]
	}
};

export default INSIGHTS;
