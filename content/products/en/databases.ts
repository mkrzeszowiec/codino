import { Product } from 'types/common';

const DATABASES: Product = {
	title: 'Databases - Database tool development and optimization',
	shortDescription:
		'Cloud client for non-relational databases. An innovative approach to managing non-relational databases.',
	description: `Our team participated in the development of a web tool for managing non-relational databases. The database client is run in the cloud, so it does not burden the user's machine and has very fast access to data. The tool allows users to handle and perform complex operations on non-relational databases.`,
	expandedDescription: {
		description: 'Some of the options available in the cloud version of the database client: ',
		points: [
			'database viewer',
			'document editor in different modes (json, table, tree)',
			'database/container management',
			'data visualization',
			'document structure analysis',
			'query performance analysis',
			'task automation (container copying, mass document editing)',
			'import/export from file and sql database',
			'analyzer for indexes',
			'clickable query builder'
		]
	},
	imageSource: '/images/case-study/databases/cover.png',
	slug: 'databases',
	color: '#ea801f',
	date: '-',
	scopeOfWork: {
		description:
			'Our team was responsible for the development of the backend and frontend application. The entire system is hosted and run in the cloud and the client can run the database client in a web browser. ',
		points: [
			{ index: 1, description: 'Java/Spring backend development' },
			{ index: 2, description: 'making a frontend application based on React framework' },
			{ index: 3, description: 'optimization of database client performance' }
		]
	},
	technologies: ['java', 'spring', 'react'],
	countries: ['']
};

export default DATABASES;
