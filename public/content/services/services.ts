import { Position } from 'types/common';
import { SERVICES_EN } from 'public/content/services/en/currentPositions';
import { SERVICES_PL } from 'public/content/services/pl/currentPositions';

export const getServicesTranslated = (locale?: string): Position[] => {
	return locale === 'pl' ? SERVICES_PL : SERVICES_EN;
};
