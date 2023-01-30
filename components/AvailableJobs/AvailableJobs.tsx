import Link from 'next/link';
import { JOB_OFFERS } from 'content/jobOffers';
import Job from 'components/AvailableJobs/Job';
import { useTranslation } from 'next-i18next';

const AvailableJobs = () => {
	const { t } = useTranslation();

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
				{JOB_OFFERS.map(job => (
					<Job job={job} key={job.slug} />
				))}
			</div>
		</section>
	);
};

export default AvailableJobs;
