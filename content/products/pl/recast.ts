import { Product } from 'types/common';

const RECAST: Product = {
	title: 'Recast',
	description:
		'Recast to platforma umożliwiająca oglądanie, transmisję video i live streamów z wydarzeń sportowych, koncertów itp, oparta o mikrotransakcje. Większość kwoty zapłaconej przez widza trafia bezpośrednio do nadawcy, a widzowie mają przejrzysty sposób na wspieranie sportowców. W projekt zaangażowane są duże firmy jak topowe kluby piłkarskie Inter, Manchester City. ' +
		'\n\nSystem składa się z aplikacji dla fanów umożliwiającej przeglądanie dostępne video, wybieranie wydarzeń odbywających się na żywo, śledzenie i wspieranie swoich sportowych idoli. Drugim elementem ekosystemu jest aplikacja dla osób tworzących treści, która umożliwia zarządzanie treściami, publikowanie wideo oraz zestawienia transmisji. ',
	shortDescription:
		'Recast to platforma umożliwiająca oglądanie, transmisję video i live streamów z wydarzeń sportowych, koncertów itp, oparta o mikrotransakcje. W projekt zaangażowane są duże firmy jak topowe kluby piłkarskie Inter, Manchester City.',
	imageSource: '/images/case-study/recast/cover.png',
	slug: 'recast',
	color: '#001021',
	date: '04.2020 - teraz',
	countries: 'europe',
	scopeOfTechnology: 'media',
	industry: 'backend, frontend',
	scopeOfWork: {
		description:
			'Początki współpracy z Recast, to dwuosobowy zespół od frontendu, który wyewoluował wraz z rozwojem platformy do dziewięcioosobowego zespołu specjalistów pracujących nad frontendem, backendem i architekturą systemu.',
		points: [
			{
				index: 1,
				description:
					'Nieustanna współpraca z zespołami klienta nad bieżącym rozwojem aplikacji frontendowych jak i  backendu napisanego w mikroserwiach'
			},
			{
				index: 2,
				description: 'Rozwój i wpływ na architekturę systemu w architekturze mikroserwisów'
			},
			{
				index: 3,
				description: 'Dekompozycja monolitu do nowych małych serwisów, ułatwiających rozwój i skalowanie całego systemu'
			},
			{
				index: 4,
				description:
					'Stworzenie oddzielnej aplikacji frontendowej dla publisherów, umożliwiającej zarządzanie treściami wideo, przeglądanie statystyk,  zestawianie live stremingów dla tysięcy użytkowników oraz szybkie zestawianie relacji bezpośrednio z urządzenia'
			},
			{
				index: 5,
				description:
					'Stworzenie mechanizmu indeksacji wideo w celu zapewnienia możliwości skalowalnego, szybkiego wyszukiwania i kategoryzowania treści'
			},
			{
				index: 6,
				description:
					'Implementacja testów wydajnościowych oraz modelowanie zachowania napływu użytkowników przy okazji dużych wydarzeń sportowych'
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
