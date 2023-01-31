import { Product } from 'types/common';

const RECAST: Product = {
	title: 'Aplikacja Recast',
	description:
		'Recast to platforma umożliwiająca oglądanie i transmisję video i live streamów z wydarzeń sportowych, koncertów itp,  oparta o mikrotraksakcje. Większość kwoty zapłaconej przez widza trafia bezpośrednio do nadawcy. W projekt zaangażowane sa duże firmy jak topowe kluby piłkarskie Inter, Manchester City.',
	imageSource: '/images/portfolio/recast.png',
	slug: 'recast',
	color: '#001021',
	date: '04.2022 - 03.2023',
	scopeOfTechnology: 'media',
	industry: 'Backend & Frontend',
	scopeOfWork: {
		description:
			'Początki Recast, to dwuosobowy zespół od frontendu, który chce zmienić rynek streamingu PPV. W trakcie rozszerzania się projektu, do naszego zespołu dołączyły nowe osoby. Dziś jest to 9 doskonałych specjalistów pracujących nad frontendem, backendem i architekturą systemu. Nasz zakres prac to:',
		points: [
			{
				index: 1,
				title: 'Praca drużynowa',
				description:
					'Współpraca z zespołem klienta. Porozumienie i odpowiedni przepływ informacji to fundament każdego projektu.'
			},
			{
				index: 2,
				title: 'Praca drużynowa',
				description:
					'Rozwój aplikacji frontendowych, a także rozwój backendu w architekturze mikroserwisów. Projektowanie architektury systemu i jednoczesne testy wydajnościowe.'
			},
			{
				index: 3,
				title: 'Praca drużynowa',
				description: 'Integracja z zewnętrznymi systemami, takimi jak np. Stripe.'
			}
		]
	},
	goals:
		'Nieustanny rozwój aplikacji frontendu oraz backendu mają jeden cel - stale ulepszać wysokoskalowalny system do transmisji video z potencjalnym milionem widzów w piku. Odpowiednie projektowanie architektury systemu zapewnia jego skalowalność, co jest szczególnie istotne w przypadku streamingu - bursty traffic.\n\n' +
		'Stale pracujemy nad wiarygodnymi testami wydajności systemu, aby każdy update zapewniał jeszcze wyższą jakość. Opracowujemy także rozwiązania pod hurtownie danych. Praca w międzynarodowym teamie sprawia, że każdy z członków naszego zespołu ma swoje własne spojrzenie na projekt - dzięki temu Recast nieustannie się rozwija i ewoluuje.\n\n' +
		'Warto zaznaczyć w tym miejscu, że w projekt zaangażowane są topowe kluby piłkarskie, takie jak Manchester City, czy Inter Mediolan. Skalowalność Recast’a  pozwala obsługiwać duże piki ruchu  w trakcie topowych wydarzeń sportowych.\n',
	technologies: ['react', 'node', 'aws', 'kubernetes', 'postgresql', 'ts', 'redis', 'meilisearch']
};

export default RECAST;
