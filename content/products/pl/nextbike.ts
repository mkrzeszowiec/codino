import { Product } from 'types/common';

const NEXTBIKE: Product = {
	title: 'Nextbike - Prace backendowe',
	shortDescription:
		'Nextbike to najpopularniejsza platforma do wypożyczania rowerów w Polsce, działająca w większości dużych miast w Polsce.',
	description:
		'Nextbike to najpopularniejsza platforma do wypożyczania rowerów w Polsce, działająca w większości dużych miast w Polsce. ' +
		'\n\nUżytkownicy przy pomocy aplikacji mobilnej, za niewielką opłatą mogą wypożyczyć rower dostępny na jednej z setek stacji rozlokowanych w strategicznych punktach w każdym mieście. Projekt jest bardzo interesujący ze względu na skalę operacji, wymagania gwarancję niezawodności oraz chęć klienta do usprawnienia i modernizacji obecnej architektury.',
	imageSource: '/images/case-study/nextbike/cover.png',
	slug: 'nextbike',
	color: '#0f84d0',
	date: '2020-2022',
	countries: 'pl',
	scopeOfTechnology: 'rozwój backendu, redesign architektury systemu',
	industry: 'wypożyczalnia, transport rowerowy, usługi publiczne',
	scopeOfWork: {
		description:
			'Głównym celem naszego działania w nextbike polska było utrzymanie i rozwój istniejących systemów, porządkowanie architektury oraz stopniowe wprowadzanie nowych serwisów i funkcjonalności',
		points: [
			{ index: 1, description: 'Rozwój systemów do raportowania i monitoringu rowerów i stacji rowerowych' },
			{ index: 2, description: 'Zaprojektowanie i implementacja przejrzystego API dla nowych aplikacji mobilnych' },
			{ index: 3, description: 'Zaprojektowanie i implementacja nowego systemu autoryzacji i uwierzytelnienia' },
			{ index: 4, description: 'Implementacja nowego sposobu pobierania danych ze stacji bazowych' }
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
