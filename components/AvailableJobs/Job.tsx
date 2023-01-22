import Link from 'next/link';
import ArrowRight from 'components/icons/ArrowRight';
import { JobOffer } from 'types/common';

interface JobProps {
	job: JobOffer;
}

const Job: React.FC<JobProps> = ({ job }) => {
	const { title, slug, mode } = job;
	return (
		<Link className="job" href={`/job-offer/${slug}`}>
			<h4 className="job__title">{title}</h4>
			<p className="job__description">{mode}</p>
			<div className="job__button">
				<ArrowRight />
			</div>
		</Link>
	);
};

export default Job;
