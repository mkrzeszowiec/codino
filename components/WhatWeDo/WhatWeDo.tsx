import Link from 'next/link';
import Position from 'components/WhatWeDo/Position';
import { CURRENT_POSITIONS } from 'content/currentPositions';
import { Trans, useTranslation } from 'next-i18next';

const WhatWeDo = () => {
	const { t } = useTranslation();

	return (
		<section className="whatWeDo" data-aos="fade-down">
			<div className="whatWeDo__info">
				<h3 className="whatWeDo__title">
					<Trans i18nKey={'components.whatWeDo.title'} />
				</h3>

				<p className="whatWeDo__description">{t('components.whatWeDo.description')}</p>

				<div className="whatWeDo__highlight">
					Rozwijaj biznesy online przy pomocy najnowszych technologii{' '}
					<Link className="highlighted-text" href="/contact">
						razem z nami
					</Link>
					.
				</div>
			</div>

			<div className="whatWeDo__positions">
				{CURRENT_POSITIONS.map(position => (
					<Position position={position} key={position.slug} />
				))}
			</div>
		</section>
	);
};

export default WhatWeDo;
