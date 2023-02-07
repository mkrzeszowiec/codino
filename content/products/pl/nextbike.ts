import { Product } from 'types/common';

const NEXTBIKE: Product = {
	title: 'Nextbike - Prace backendowe',
	description: 'Ratunek i rozwój systemu obsługującego miejskie rowery. https://nextbike.pl',
	imageSource: '/images/case-study/nextbike/cover.png',
	slug: 'nextbike',
	color: '#0f84d0',
	date: '2020-2022',
	countries: 'pl',
	scopeOfTechnology: 'rozwój backendu, redesign architektury systemu',
	industry: 'wypożyczalnia, transport rowerowy, usługi publiczne',
	scopeOfWork: {
		description: '',
		points: [
			{ index: 1, description: 'stworzyć nowe serwisy które zdejmą obciążenie z istniejącego serwisu' },
			{ index: 2, description: 'zaprojektować i stworzyć API dla nowych aplikacji mobilnych' },
			{ index: 3, description: 'utrzymanie i rozwój istniejących systemów' }
		]
	},
	technologies: ['node', 'php', 'mongodb', 'ts'],
	solutions: [
		{
			title: 'Rozwiązanie 1',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/nextbike/1.png'
		},
		{
			title: 'Rozwiązanie 2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium, aliquam cupiditate enim et exercitationem expedita fugiat illo ipsum magni nulla omnis possimus provident quibusdam quisquam saepe sed sit voluptatibus!',
			imageSrc: '/images/case-study/nextbike/2.png'
		}
	]
};

export default NEXTBIKE;
