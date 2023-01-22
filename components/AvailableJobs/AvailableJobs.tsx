import Link from 'next/link';
import { JOB_OFFERS } from 'content/jobOffers';
import Job from 'components/AvailableJobs/Job';

const AvailableJobs = () => {
	return (
		<section className="availableJobs" data-aos="fade-down">
			<div className="availableJobs__info">
				<h3 className="availableJobs__title">Dostępne oferty pracy</h3>
				<p className="availableJobs__description">
					Nie widzisz odpowiedniej oferty dla siebie? {` `}
					<Link className="highlighted-text" href="/contact">
						Napisz do nas!
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
