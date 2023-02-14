import { Product } from 'types/common';

const RECAST: Product = {
	title: 'Recast',
	description:
		'Recast is a platform that allows viewers to watch, video and live stream sporting events, concerts, etc., based on microtransactions. Most of the amount paid by the viewer goes directly to the broadcaster, and viewers have a transparent way to support athletes. Big companies like top soccer clubs Inter, Manchester City are involved in the project. ' +
		'\n\nThe ecosystem consists of an app for fans to browse available video, select live events, follow and support their sports idols. The second component of the ecosystem is an app for content creators to manage content, publish videos and compile broadcasts. ',
	shortDescription:
		'Recast is a platform for watching, video and live streams of sports events, concerts, etc., based on microtransactions. Big companies like top soccer clubs Inter, Manchester City are involved in the project.',
	imageSource: '/images/case-study/recast/cover.png',
	slug: 'recast',
	color: '#001021',
	date: '04.2020 - now',
	countries: 'europe',
	scopeOfTechnology: 'media',
	industry: 'backend, frontend',
	scopeOfWork: {
		description:
			'Started working with Recast, it was a two-person team from the frontend that evolved as the platform grew to a nine-person team of specialists working on the frontend, backend and system architecture',
		points: [
			{
				index: 1,
				description:
					'Continuous collaboration with client teams on ongoing development of frontend applications as well as backend written in microservices'
			},
			{
				index: 2,
				description: 'Development and influence on system architecture in microservices architecture'
			},
			{
				index: 3,
				description:
					'Decomposition of the monolith into new small services, facilitating development and scaling of the entire system'
			},
			{
				index: 4,
				description:
					'Creation of a separate front-end application for publishers to manage video content, view statistics, compile live streams for thousands of users, and quickly compile testimonials directly from the device'
			},
			{
				index: 5,
				description:
					'Create a video indexing mechanism to provide scalable, fast search and content categorization capabilities'
			},
			{
				index: 6,
				description:
					'Implementation of performance testing and modeling of user influx behavior for major sporting events'
			}
		]
	},
	goals:
		'Nieustanny rozwój aplikacji frontendu oraz backendu mają jeden cel - stale ulepszać wysokoskalowalny system do transmisji video z potencjalnym milionem widzów w piku. Odpowiednie projektowanie architektury systemu zapewnia jego skalowalność, co jest szczególnie istotne w przypadku streamingu - bursty traffic.\n\n' +
		'Stale pracujemy nad wiarygodnymi testami wydajności systemu, aby każdy update zapewniał jeszcze wyższą jakość. Opracowujemy także rozwiązania pod hurtownie danych. Praca w międzynarodowym teamie sprawia, że każdy z członków naszego zespołu ma swoje własne spojrzenie na projekt - dzięki temu Recast nieustannie się rozwija i ewoluuje.\n\n' +
		'Warto zaznaczyć w tym miejscu, że w projekt zaangażowane są topowe kluby piłkarskie, takie jak Manchester City, czy Inter Mediolan. Skalowalność Recast’a  pozwala obsługiwać duże piki ruchu  w trakcie topowych wydarzeń sportowych.\n',
	technologies: ['react', 'node', 'aws', 'kubernetes', 'postgresql', 'ts', 'redis', 'meilisearch'],
	solutions: [
		{
			description:
				'Obecnie skupiamy się na wielu nowych rozwiązaniach, które mają jeszcze bardziej udoskonalić nasz projekt. Tworzymy mechanizm indeksowania video i livestreamów, aby zoptymalizować działanie całego systemu. Jest on  przystępny dla użytkownika oraz maksymalnie praktyczny dla twórcy.',
			imageSrc: '/images/case-study/recast/1.png'
		},
		{
			description:
				'Pracujemy także nad nowym mechanizmem autoryzacji i wprowadzeniem optymalizacji poprzez odpowiednie mechanizmy cachujące. Aktywnie zajmujemy się także modułem i architekturą dla współpracy w modelu B2B. W naszej codziennej pracy skupiamy się również na dekompozycji monolitu i przejściu do architektury mikroserwisów.',
			imageSrc: '/images/case-study/recast/2.png'
		},
		{
			description:
				'System działa na produkcji od roku i stale pracujemy nad jego doskonaleniem. Recast już teraz obsługuje duże wydarzenia sportowe, jak chociażby streaming meczu Manchester City kontra Barcelona. ',
			imageSrc: '/images/case-study/recast/2.png'
		}
	]
};

export default RECAST;
