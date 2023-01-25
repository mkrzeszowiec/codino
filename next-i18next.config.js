module.exports = {
	i18n: {
		defaultLocale: 'pl',
		locales: ['pl', 'en']
	},
	localePath:
		typeof window === 'undefined'
			? // eslint-disable-next-line @typescript-eslint/no-var-requires
			  require('path').resolve('./public/locales')
			: '/locales'
};
