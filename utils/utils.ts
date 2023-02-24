export const getIsServerSide: () => boolean = () => typeof window === 'undefined';

export const getIsEven: (number) => boolean = number => number % 2 == 0;

export const getNumberWithLeadingZero: (number: number) => string | number = (number: number) =>
	number < 10 ? `0${number}` : number;

export const getPageTitle = (name: string): string => `${name} - Codino`;

export const getCamelCased = (text: string): string =>
	text.replace(/-([a-z])/g, function (g) {
		return g[1].toUpperCase();
	});

export const generateHashCode = (value: number | string): string => {
	return value
		.toString()
		.split('')
		.reduce(function (a, b) {
			a = (a << 5) - a + b.charCodeAt(0);
			return a & a;
		}, 0)
		.toString();
};
