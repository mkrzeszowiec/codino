import { useRouter } from 'next/router';
import { event } from 'nextjs-google-analytics/dist/interactions/event';

const LanguageButton = ({ className = '' }) => {
	const router = useRouter();

	const getNextAvailableLocale = (): string => (router.locale == 'pl' ? 'en' : 'pl');

	const handleLocaleChange = () => {
		event('click_change_language_button', {
			category: 'Navigation'
		});

		const { pathname, query, asPath } = router;
		router.push({ pathname, query }, asPath, { locale: getNextAvailableLocale() });
	};

	return (
		<button className={className} onClick={handleLocaleChange}>
			{getNextAvailableLocale()}
		</button>
	);
};

export default LanguageButton;
