module.exports = {
	i18n: {
		defaultLocale: 'pl',
		locales: ['pl', 'en'],
		reloadOnPrerender: process.env.NODE_ENV === 'development'
	},
	localePath:
		typeof window === 'undefined'
			? // eslint-disable-next-line @typescript-eslint/no-var-requires
			  require('path').resolve('./public/locales')
			: '/locales'
};
