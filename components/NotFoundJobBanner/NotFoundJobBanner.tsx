import Button from 'components/Button/Button';
import { useTranslation } from 'next-i18next';

export const NotFoundJobBanner = () => {
	const { t } = useTranslation();

	return (
		<div className="notFoundJobBanner">
			<h3 className="notFoundJobBanner__header">Nie znalazłeś oferty dla siebie? Napisz do nas</h3>
			<Button className="notFoundJobBanner__button" label={t('common.contact')} href="/contact" />
		</div>
	);
};
