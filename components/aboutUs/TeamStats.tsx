import Image from 'next/image';
import CountUp from 'react-countup';
import { useTranslation } from 'next-i18next';

const TeamStats = () => {
	const { t } = useTranslation();

	return (
		<section className="teamStats">
			<Image className="teamStats__image" src={'/images/stats.png'} width={1500} height={1500} alt="" />

			<div className="teamStats__wrapper">
				<div className="teamStats__info">
					<h3 className="teamStats__header">
						<CountUp end={8} duration={1.5} enableScrollSpy />+
					</h3>
					<p className="teamStats__description">{t('components.teamStats.first')}</p>
				</div>

				<div className="teamStats__info">
					<h3 className="teamStats__header">
						<CountUp end={20} duration={1.5} enableScrollSpy />+
					</h3>
					<p className="teamStats__description">{t('components.teamStats.second')}</p>
				</div>
			</div>
		</section>
	);
};

export default TeamStats;
