export interface Product {
	title: string;
	description: string;
	imageSource: string;
	slug: string;
	color: string;
	date: string;
	scope: string;
	industry: string;
}

export interface Position {
	title: string;
	description: string;
	shortDescription: string;
	scope: string;
	slug: string;
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
