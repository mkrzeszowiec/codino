import { JobOffer } from 'types/common';
import { JOB_OFFERS_EN } from 'public/content/jobs/en/jobOffers';
import { JOB_OFFERS_PL } from 'public/content/jobs/pl/jobOffers';

export const getJobsOfferTranslated = (locale?: string): JobOffer[] => {
	return locale === 'pl' ? JOB_OFFERS_PL : JOB_OFFERS_EN;
};
