import { Product } from 'types/common';

const ZIPZERO: Product = {
	title: 'ZipZero',
	shortDescription:
		'ZipZero to aplikacja zakupowa z pozwalająca na zbieranie środków z zakupów do opłacania miesięcznych domowych rachunków.',
	description:
		'Zipezero to aplikacja zakupowa z pozwalająca na zbieranie środków z zakupów do opłacania miesięcznych domowych rachunków. Użytkownicy dostają nagrody poprzez podzielenie się swoimi paragonami zakupowymi, lub szczegółami zakupów online. Platforma nagradza użytkowników za każde zakupy, a specjalne oferty premium pozwalają na jeszcze większe oszczędności. ' +
		'\n\nAplikacja działa na rynku brytyjskim od 4 lat i jest używana przez setki tysięcy użytkowników dziennie. ',
	imageSource: '/images/case-study/zipzero/cover.png',
	slug: 'zipzero',
	color: '#2c368a',
	date: '2019 - teraz',
	countries: 'uk',
	scopeOfTechnology: 'achitektura, backend, aplikacja mobilna, ML do wykrywania fraudów, panel backoffice',
	industry: 'system cashback',
	scopeOfWork: {
		description:
			'Początki projektu to wielogodzinne sesje planowania i analizowania domeny i architektury nowego systemu który został nam powierzony do stworzenia.' +
			' Głównymi założeniami systemu była możliwość przetwarzanie tysięcy transakcji dziennie,  łatwa w użyciu i przejrzysta aplikacja mobilna i panel administracyjny umożliwiający łatwe zarządzanie cały system.' +
			'\n\n Nasz zakres prac: ',
		points: [
			{
				index: 1,
				description:
					'Przygotowanie planu działania i wstępnej architektury pod MVP który miał zostać wdrożony po kilku miesiącach pracy'
			},
			{
				index: 2,
				description:
					'Zaprojektowanie architektury systemu w oparciu o architekturę mikroserwisów, aby zapewnić skalowalność i możliwość pracy nad wieloma częściami systemu przez niezależne zespoły programistów'
			},
			{
				index: 3,
				description:
					'Zaprojektowanie bazy danych oraz hurtowni które będą w stanie przechowywać miliony transakcji, produktów i zakupów'
			},
			{ index: 4, description: 'Integracje z zewnętrznymi sieciami afiliacyjnymi' },
			{ index: 5, description: 'Aplikacja mobilna na system android' },
			{ index: 6, description: 'Panel administracyjny do zarządzania systemem' },
			{ index: 7, description: 'System chroniący przed nadużyciami i oszustwami w oparciu o machine learning' }
		]
	},
	technologies: ['java', 'spring', 'kotlin', 'angular', 'postgresql', 'redis', 'elastic', 'android', 'kubernetes']
};

export default ZIPZERO;
