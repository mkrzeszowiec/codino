import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { JobOffer } from 'types/common';
import JobDetails from 'components/JobDetails/JobDetails';
import Main from 'layouts/MainLayout';
import { getPageTitle } from 'utils/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';
import { getJobsOfferTranslated } from 'content/jobs/jobs';

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: true
	};
};

interface Params extends ParsedUrlQuery {
	slug: string;
}

type Props = {
	job: JobOffer;
};

export const getStaticProps: GetStaticProps = async context => {
	const { slug } = context.params as Params;

	if (!slug) {
		throw Error('Job not found');
	}

	const job = getJobsOfferTranslated(DEFAULT_LOCALE).find(job => job.slug === slug);

	return {
		props: {
			job,
			...(await serverSideTranslations(context.locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
		}
	};
};

const JobPage = ({ job }: Props) => {
	const router = useRouter();
	const [translatedJob, setTranslatedJob] = useState(job);

	useEffect(() => {
		const currentJob = getJobsOfferTranslated(router.locale).find(j => j?.slug === job?.slug);
		setTranslatedJob(currentJob);
	}, [job, router.locale]);

	if (!job) return null;

	return (
		<Main title={getPageTitle(translatedJob.title)}>
			<div className="container">
				<JobDetails job={translatedJob} />
			</div>
		</Main>
	);
};

export default JobPage;
