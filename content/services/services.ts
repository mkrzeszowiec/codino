import { Position } from 'types/common';
import { SERVICES_EN } from 'content/services/en/currentPositions';
import { SERVICES_PL } from 'content/services/pl/currentPositions';

export const getServicesTranslated = (locale?: string): Position[] => {
	return locale === 'pl' ? SERVICES_PL : SERVICES_EN;
};
