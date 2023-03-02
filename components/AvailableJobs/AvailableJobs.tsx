import Link from 'next/link';
import Job from 'components/AvailableJobs/Job';
import { useTranslation } from 'next-i18next';
import { getJobsOfferTranslated } from 'public/content/jobs/jobs';
import { useRouter } from 'next/router';

const AvailableJobs = () => {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<section className="availableJobs" data-aos="fade-down">
			<div className="availableJobs__info">
				<h3 className="availableJobs__title">{t('components.career.header')}</h3>
				<p className="availableJobs__description">
					{t('components.career.jobsNotFoundTitle')}
					{` `}
					<Link className="highlighted-text" href="/contact">
						{t('components.career.jobsNotFoundTitle2')}
					</Link>
				</p>
			</div>

			<div className="availableJobs__list">
				{getJobsOfferTranslated(router.locale).map(job => (
					<Job job={job} key={job.slug} />
				))}
			</div>
		</section>
	);
};

export default AvailableJobs;
