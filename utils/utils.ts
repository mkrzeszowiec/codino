export const getIsServerSide = () => typeof window === 'undefined';

export const getIsEven = number => number % 2 == 0;

export const getIsHomePage = (pathname: string) => pathname == '/';

export const getNumberWithLeadingZero = (number: number) => (number < 10 ? `0${number}` : number);

export const getPageTitle = (name: string) => `${name} - Codino`;
