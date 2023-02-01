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
	| 'teradata';

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
	scope: string;
	slug: string;
	technologies?: technology[];
}

export interface JobOffer {
	title: string;
	description: string;
	payRanges: string;
	slug: string;
	roleAndResponsibilities: string[];
	requirements: string[];
	experienceLevel: 'junior' | 'mid' | 'senior';
	mode: 'remote' | 'office' | 'hybrid';
}
