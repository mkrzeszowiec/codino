export type technology =
	| 'java'
	| 'docker'
	| 'spring'
	| 'hibernate'
	| 'kafka'
	| 'kubernetes'
	| 'redis'
	| 'elastic'
	| 'node'
	| 'html'
	| 'angular'
	| 'react'
	| 'ts'
	| 'android'
	| 'ios'
	| 'python'
	| 'kotlin'
	| 'scala'
	| 'mysql'
	| 'postgresql'
	| 'mongodb'
	| 'php'
	| 'aws'
	| 'meilisearch'
	| 'teradata'
	| 'leasing';

export interface Product {
	title: string;
	description: string;
	imageSource: string;
	slug: string;
	color: string;
	date: string;
	scopeOfTechnology?: string;
	industry: string;
	scopeOfWork?: {
		description: string;
		points: {
			index: number;
			title?: string;
			description: string;
		}[];
	};
	goals?: string;
	technologies?: technology[];
	//3 characters, check in content/worldMap.json
	countries?: string[];
	solutions?: {
		title?: string;
		description: string;
		imageSrc: string;
	}[];
}

export interface Position {
	title: string;
	description: string;
	shortDescription: string;
	slug: string;
	icons?: technology[];
}

export interface JobOffer {
	title: string;
	description: string;
	payRanges: string;
	slug: string;
	roleAndResponsibilities: string[];
	requirements: string[];
	experienceLevel: string;
	mode: string;
}
