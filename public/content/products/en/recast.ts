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
			'Started working with Recast, it was a two-person team from the frontend that evolved as the platform grew to a nine-person team of specialists working on the frontend, backend and system architecture.' +
			'\n\n Our scope of work:',
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
		'Nieustanny rozw??j aplikacji frontendu oraz backendu maj?? jeden cel - stale ulepsza?? wysokoskalowalny system do transmisji video z potencjalnym milionem widz??w w piku. Odpowiednie projektowanie architektury systemu zapewnia jego skalowalno????, co jest szczeg??lnie istotne w przypadku streamingu - bursty traffic.\n\n' +
		'Stale pracujemy nad wiarygodnymi testami wydajno??ci systemu, aby ka??dy update zapewnia?? jeszcze wy??sz?? jako????. Opracowujemy tak??e rozwi??zania pod hurtownie danych. Praca w mi??dzynarodowym teamie sprawia, ??e ka??dy z cz??onk??w naszego zespo??u ma swoje w??asne spojrzenie na projekt - dzi??ki temu Recast nieustannie si?? rozwija i ewoluuje.\n\n' +
		'Warto zaznaczy?? w tym miejscu, ??e w projekt zaanga??owane s?? topowe kluby pi??karskie, takie jak Manchester City, czy Inter Mediolan. Skalowalno???? Recast???a  pozwala obs??ugiwa?? du??e piki ruchu  w trakcie topowych wydarze?? sportowych.\n',
	technologies: ['react', 'node', 'aws', 'kubernetes', 'postgresql', 'ts', 'redis', 'meilisearch'],
	solutions: [
		{
			description:
				'Obecnie skupiamy si?? na wielu nowych rozwi??zaniach, kt??re maj?? jeszcze bardziej udoskonali?? nasz projekt. Tworzymy mechanizm indeksowania video i livestream??w, aby zoptymalizowa?? dzia??anie ca??ego systemu. Jest on  przyst??pny dla u??ytkownika oraz maksymalnie praktyczny dla tw??rcy.',
			imageSrc: '/images/case-study/recast/1.png'
		},
		{
			description:
				'Pracujemy tak??e nad nowym mechanizmem autoryzacji i wprowadzeniem optymalizacji poprzez odpowiednie mechanizmy cachuj??ce. Aktywnie zajmujemy si?? tak??e modu??em i architektur?? dla wsp????pracy w modelu B2B. W naszej codziennej pracy skupiamy si?? r??wnie?? na dekompozycji monolitu i przej??ciu do architektury mikroserwis??w.',
			imageSrc: '/images/case-study/recast/2.png'
		},
		{
			description:
				'System dzia??a na produkcji od roku i stale pracujemy nad jego doskonaleniem. Recast ju?? teraz obs??uguje du??e wydarzenia sportowe, jak chocia??by streaming meczu Manchester City kontra Barcelona. ',
			imageSrc: '/images/case-study/recast/2.png'
		}
	]
};

export default RECAST;
