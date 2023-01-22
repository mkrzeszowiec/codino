import Link from 'next/link';
import ArrowRight from 'components/icons/ArrowRight';
import { JobOffer } from 'types/common';
import Dot from 'components/icons/Dot';

interface JobProps {
	job: JobOffer;
}

const Job: React.FC<JobProps> = ({ job }) => {
	const { title, slug, payRanges, mode, experienceLevel } = job;

	return (
		<Link className="job" href={`/career/${slug}`}>
			<h4 className="job__title">{title}</h4>

			<div className="job__description">
				<p className="job__payRanges">{payRanges}</p>
				<Dot className="job__dot" />
				<p className="job__experience">{experienceLevel}</p>
				<Dot className="job__dot" />
				<p className="job__mode">{mode}</p>
			</div>

			<div className="job__button">
				<ArrowRight />
			</div>
		</Link>
	);
};

export default Job;
