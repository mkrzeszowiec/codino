import Button from 'components/Button/Button';
import { Trans, useTranslation } from 'next-i18next';

export const NotFoundJobBanner = () => {
	const { t } = useTranslation();

	return (
		<div className="notFoundJobBanner">
			<h3 className="notFoundJobBanner__header">
				<Trans i18nKey={'components.notFoundJobBanner.header'} />
			</h3>

			<Button className="notFoundJobBanner__button" label={t('common.contact')} href="/contact" />
		</div>
	);
};
