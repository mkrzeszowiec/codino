import { Product } from 'types/common';

const AXISROOMS: Product = {
	title: 'Axisrooms CRS',
	shortDescription:
		'Axisrooms Central Reservation System to rozbudowany system do zarządzania sieciami hoteli i apartamentów działający w Indiach.',
	description:
		'Axisrooms Central Reservation System to rozbudowany system do zarządzania sieciami hoteli i apartamentów działający w Indiach. Oprogramowanie pozwala na konfigurację wszystkich parametrów hotelu zaczynając od podstawowych danych jak liczba i rodzaje dostępnych pokoi, cenniki, polityki rezerwacji i anulowania, planów żywieniowych, podatków, pakietów dodatków, promocji. Dodatkowo system posiada własny system rezerwacji umożliwiający dodawanie rezerwacji na miejscu przez pracowników oraz synchronizację z zewnętrznymi dostawcami rezerwacji np Booking.com',
	imageSource: '/images/case-study/axisrooms/cover.png',
	slug: 'axisrooms',
	color: '#ea1f61',
	date: '-',
	countries: ['IND'],
	scopeOfTechnology: '-',
	scopeOfWork: {
		description:
			'Celem naszego zespołu było przygotowanie całego backendu i frontendu od początku wg dostarczonej nam dokumentacji. Praca nad projektem to 3 lata developmentu i nieustannej komunikacji z analitykami i testerami klienta w celu dostarczenia najwyższej jakości produktu.' +
			'\n\n Nasz zakres prac: ',
		points: [
			{
				index: 1,
				description:
					'Szczegółowe zapoznanie się z domeną hotelarską oraz całkowite zaprojektowanie architektury backendowej i frontendowej'
			},
			{
				index: 2,
				description:
					'Zaprojektowanie i implementacja frontendu pozwalającego w łatwy i przejrzysty sposób na obsługę skomplikowanych aspektów związanych z zarządzanie hotelem i rezerwacjami'
			},
			{
				index: 3,
				description:
					'Zaprojektowanie i implementacja skalowalnego backendu pozwalającego obsługę tysięcy hoteli i ich rezerwacji'
			},
			{
				index: 4,
				description:
					'Zaprojektowanie heurystyki do obsługi rezerwacji która pozwala na optymalne rozmieszczenie gości hotelowych po dostępnych pokojach'
			},
			{
				index: 5,
				description: 'Integracje z systemami klienta dostarczającymi informacje o rezerwacjach z zewnętrznych systemów'
			}
		]
	},
	industry: 'turystyka, crm',
	technologies: ['java', 'docker', 'angular', 'postgresql', 'spring', 'postgresql', 'redis', 'rabbitmq']
};

export default AXISROOMS;
