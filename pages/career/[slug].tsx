import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { JobOffer } from 'types/common';
import JobDetails from 'components/JobDetails/JobDetails';
import { JOB_OFFERS } from 'content/jobOffers';
import Main from 'layouts/MainLayout';
import { getPageTitle } from 'utils/utils';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE, DEFAULT_TRANSLATE_NAMESPACE } from 'utils/constants';

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
		props: {
			job,
			...(await serverSideTranslations(context.locale ?? DEFAULT_LOCALE, [DEFAULT_TRANSLATE_NAMESPACE]))
		}
	};
};

const JobPage = ({ job }: Props) => {
	if (!job) return null;

	return (
		<Main title={getPageTitle(job.title)}>
			<div className="container">
				<JobDetails job={job} />
			</div>
		</Main>
	);
};

export default JobPage;
