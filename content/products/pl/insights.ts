import { Product } from 'types/common';

const INSIGHTS: Product = {
	title: 'Insights - Projekt analityczny dla branży lotniczej.',
	shortDescription:
		'Insights to narzędzie webowe, które upraszcza i przyspiesza działania związane z badaniami i analizami w liniach lotniczych.',
	description:
		'Zespół naszych programistów tworzył projekt Insights. Jest to narzędzie webowe, które upraszcza i przyspiesza działania związane z badaniami i analizami w liniach lotniczych. Umożliwia łatwe wyszukiwanie i nawigację bez pisania skomplikowanych zapytań SQL. Dodatkowo, narzędzie to pozwala na detekcję oraz śledzenia ryzyk, ułatwia zarządzanie ryzykami oraz ich audytowanie, co pozwala na wygenerowanie dodatkowej wartości dla linii lotniczych. System działa od kilku lat i jest regularnie używany przez analityków.',
	imageSource: '/images/case-study/insights/cover.png',
	slug: 'insights',
	color: '#1f4cea',
	date: '2017-2021',
	scopeOfTechnology: 'backend, frontend',
	industry: 'linie lotnicze, analityka',
	countries: ['USA', 'PAN'],
	technologies: ['java', 'spring', 'angular', 'elastic', 'teradata'],
	scopeOfWork: {
		description:
			'Nasz zespół zaprojektował a następnie wykonał cały system. Backend został wykonany w technologii Java/Spring w oparciu o architekturę mikroserwisów. Głównym celem systemu było umożliwienie przetwarzania dużych zbiorów danych z baz danych linii lotniczych. Wyniki działania systemu są przedstawiane w formie wykresów i różnego rodzaju statystyk.',
		points: [
			{
				index: 1,
				description: `projekt backendu w oparciu o architekturę mikroserwisów`
			},
			{
				index: 2,
				description:
					'projekt aplikacji frontendowej do wizualizacji danych analitycznych związanych z pasażerami, lotami, audytami, ryzykami'
			},
			{
				index: 3,
				description:
					'wykonanie skomplikowanej aplikacji frontendowej do przedstawiania wyników operacji backendowych oraz zarządzania m.in. ryzykami linii lotniczych'
			},
			{
				index: 4,
				description: 'nieustanne ulepszanie systemu zgodnie z potrzebami analityków'
			},
			{
				index: 5,
				description:
					'opracowanie algorytmu identyfikacji i unifikacji pasażerów na podstawie szczątkowych danych z różnych systemów'
			}
		]
	}
};

export default INSIGHTS;
