import SectionTitle from 'components/SectionTitle/SectionTitle';
import { JobOffer } from 'types/common';
import JobForm from 'components/JobDetails/JobForm';
import MarkerIcon from 'components/icons/Marker';
import StarIcon from 'components/icons/Star';
import CheckCircleIcon from 'components/icons/CheckCircle';
import { useTranslation } from 'next-i18next';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';

const JobDetails: React.FC<{ job: JobOffer }> = ({ job }) => {
	const { t } = useTranslation();
	const { title, description, mode, experienceLevel, roleAndResponsibilities, requirements } = job;

	return (
		<section className="jobDetails">
			<div className="jobDetails__infoWrapper">
				<Breadcrumbs currentPage={job.title} type="career" />

				<SectionTitle>{title}</SectionTitle>

				<p className="jobDetails__description">{description}</p>

				<div className="jobDetails__inNutshell">
					<p className="jobDetails__inNutshellPoint">
						<MarkerIcon />
						{mode}
					</p>

					<p className="jobDetails__inNutshellPoint">
						<StarIcon />
						{experienceLevel}
					</p>
				</div>

				<h3 className="jobDetails__subtitle">{t('components.jobDetails.firstHeader')}</h3>

				<ul className="jobDetails__list">
					{roleAndResponsibilities.map(responsibility => (
						<li className="jobDetails__listItem" key={responsibility}>
							<CheckCircleIcon />
							{responsibility}
						</li>
					))}
				</ul>

				<h3 className="jobDetails__subtitle">{t('components.jobDetails.secondHeader')}</h3>
				<ul className="jobDetails__list">
					{requirements.map(requirement => (
						<li className="jobDetails__listItem" key={requirement}>
							<CheckCircleIcon />
							{requirement}
						</li>
					))}
				</ul>
			</div>

			<div className="jobDetails__form">
				<JobForm position={title} />
			</div>
		</section>
	);
};

export default JobDetails;
