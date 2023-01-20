export const getIsServerSide = () => typeof window === 'undefined';

export const getIsEven = number => number % 2 == 0;

export const getIsHomePage = (pathname: string) => pathname == '/';
