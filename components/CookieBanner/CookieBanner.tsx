import Cookies from 'js-cookie';
import { MouseEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const USER_CONSENT_COOKIE_KEY = 'cookie_consent_is_true';
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365;

const CookieBanner = () => {
	const { t } = useTranslation();
	const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true);

	useEffect(() => {
		const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === 'true';
		setCookieConsentIsTrue(consentIsTrue);
	}, []);

	const onClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		if (!cookieConsentIsTrue) {
			Cookies.set(USER_CONSENT_COOKIE_KEY, 'true', {
				expires: USER_CONSENT_COOKIE_EXPIRE_DATE
			});
			setCookieConsentIsTrue(true);
		}
	};

	if (cookieConsentIsTrue) {
		return null;
	}

	return (
		<section className="cookieBanner">
			<div className="container cookieBanner__content">
				<div className="cookieBanner__infoWrapper">
					<p className="cookieBanner__text">{t('components.cookie.description')}</p>

					<Link href="/cookies-policy" className="cookieBanner__url">
						{t('components.cookie.moreDetailsUrl')}
					</Link>
				</div>

				<button className="cookieBanner__button" onClick={onClick}>
					<Image className="cookieBanner__icon" src="/images/cookies.svg" alt="" width={50} height={50} />
					{t('components.cookie.button')}
				</button>
			</div>
		</section>
	);
};

export default CookieBanner;
