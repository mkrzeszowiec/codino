import { JobOffer } from 'types/common';
import { JOB_OFFERS_EN } from 'content/jobs/en/jobOffers';
import { JOB_OFFERS_PL } from 'content/jobs/pl/jobOffers';

export const getJobsOfferTranslated = (locale?: string): JobOffer[] => {
	return locale === 'pl' ? JOB_OFFERS_PL : JOB_OFFERS_EN;
};
