export const getIsServerSide = () => typeof window === 'undefined';

export const getIsEven = number => number % 2 == 0;

export const getNumberWithLeadingZero = (number: number) => (number < 10 ? `0${number}` : number);

export const getPageTitle = (name: string) => `${name} - Codino`;

export const getCamelCased = (text: string) =>
	text.replace(/-([a-z])/g, function (g) {
		return g[1].toUpperCase();
	});
