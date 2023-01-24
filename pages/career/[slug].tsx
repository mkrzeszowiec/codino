import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { JobOffer } from 'types/common';
import { JOB_OFFERS } from 'content/jobOffers';
import Main from 'layouts/MainLayout';
import { getPageTitle } from 'utils/utils';

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

	const job = JOB_OFFERS.find(job => job.slug === slug);

	return {
		props: { job }
	};
};

const JobPage = ({ job }: Props) => {
	if (!job) return null;

	return <Main title={getPageTitle(job.title)}>{JSON.stringify(job, null, 2)}</Main>;
};

export default JobPage;
