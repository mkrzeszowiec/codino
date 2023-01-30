import { useRouter } from 'next/router';

const LanguageButton = ({ className = '' }) => {
	const router = useRouter();

	const getNextAvailableLocale = (): string => (router.locale == 'pl' ? 'en' : 'pl');

	const handleLocaleChange = () => {
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
