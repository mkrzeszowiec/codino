import { Product } from 'types/common';

const DATABASES: Product = {
	title: 'Bazy danych - Tworzenie narzędzi bazodanowych i optymalizacja',
	shortDescription:
		'Chmurowy klient do nieralacynych baz danych. Innowacyjne podejście do zarządzania nierelacyjymi bazami danych.',
	description:
		'Nasz zespół brał udział w tworzeniu narzędzia webowego do zarządzania nierelacyjnymi bazami danych. Klient bazy danych jest uruchamiany w chmurze, dzięki czemu nie obciąża maszyny użytkownika i ma bardzo szybki dostęp do danych. Narzędzie pozwala na obsługę i wykonywanie skomplikowanych operacji na nierelacyjnych bazach.',
	expandedDescription: {
		description: 'Niektóre z opcji dostępnych w chmurowej wersji klienta bazy danych: ',
		points: [
			'przeglądarka bazy',
			'edytor dokumentów w różnych trybach (json, tabelka, drzewko)',
			'zarządzanie bazami/kontenerami',
			'wizualizacja danych',
			'analiza struktury dokumentów',
			'analiza wydajności zapytań',
			'automatyzacja zadań (kopiowanie kontenerów, masowa edycja dokumentów)',
			'import/eksport z pliku i bazy sql',
			'analizator do indeksów',
			'klikany kreator do zapytań'
		]
	},
	imageSource: '/images/case-study/databases/cover.png',
	slug: 'databases',
	color: '#ea801f',
	date: '-',
	scopeOfWork: {
		description:
			'Nasz zespół odpowiadał za development backendu oraz aplikacji frontendowej. Cały system jest hostowany i uruchamiany w chmurze a klient może uruchamiać klienta bazy danych w przeglądarce internetowej. ',
		points: [
			{ index: 1, description: 'wykonanie backendu w technologii Java/Spring' },
			{ index: 2, description: 'wykonanie aplikacji frontendowej na bazie frameworka React' },
			{ index: 3, description: 'optymalizacja działania klienta bazy danych' }
		]
	},
	technologies: ['java', 'spring', 'react'],
	countries: ['']
};

export default DATABASES;
