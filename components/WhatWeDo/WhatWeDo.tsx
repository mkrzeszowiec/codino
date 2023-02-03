import Link from 'next/link';
import { useRouter } from 'next/router';
import Position from 'components/WhatWeDo/Position';
import { Trans, useTranslation } from 'next-i18next';
import { getServicesTranslated } from 'content/services/services';

const WhatWeDo = () => {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<section className="whatWeDo" data-aos="fade-down">
			<div className="whatWeDo__info">
				<h3 className="whatWeDo__title">
					<Trans i18nKey={'components.whatWeDo.title'} />
				</h3>

				<p className="whatWeDo__description">{t('components.whatWeDo.description')}</p>

				<div className="whatWeDo__highlight">
					{t('components.whatWeDo.highlight1')}{' '}
					<Link className="highlighted-text" href="/contact">
						{t('components.whatWeDo.highlight2')}
					</Link>
					.
				</div>
			</div>

			<div className="whatWeDo__positions">
				{getServicesTranslated(router.locale).map(position => (
					<Position position={position} key={position.slug} />
				))}
			</div>
		</section>
	);
};

export default WhatWeDo;
