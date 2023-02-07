import { Product } from 'types/common';

const RECAST: Product = {
	title: 'Recast app',
	description:
		'Recast is a platform that allows viewers to watch and stream video and live streams of sports events, concerts, etc., based on microtransactions. Most of the amount paid by the viewer goes directly to the broadcaster. Large companies like top soccer clubs Inter, Manchester City are involved in the project.',
	imageSource: '/images/case-study/recast/cover.png',
	slug: 'recast',
	color: '#001021',
	date: '04.2020 - now',
	countries: 'europe',
	scopeOfTechnology: 'media',
	industry: 'backend, frontend',
	scopeOfWork: {
		description:
			'Początki Recast, to dwuosobowy zespół od frontendu, który chce zmienić rynek streamingu PPV. W trakcie rozszerzania się projektu, do naszego zespołu dołączyły nowe osoby. Dziś jest to 9 doskonałych specjalistów pracujących nad frontendem, backendem i architekturą systemu. Nasz zakres prac to:',
		points: [
			{
				index: 1,
				title: 'Praca drużynowa',
				icon: 'partnership',
				description:
					'Współpraca z zespołem klienta. Porozumienie i odpowiedni przepływ informacji to fundament każdego projektu.'
			},
			{
				index: 2,
				title: 'Praca drużynowa',
				icon: 'scope',
				description:
					'Rozwój aplikacji frontendowych, a także rozwój backendu w architekturze mikroserwisów. Projektowanie architektury systemu i jednoczesne testy wydajnościowe.'
			},
			{
				index: 3,
				title: 'Praca drużynowa',
				icon: 'integration',
				description: 'Integracja z zewnętrznymi systemami, takimi jak np. Stripe.'
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
