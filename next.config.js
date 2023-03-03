const path = require('path');
const { i18n } = require('./next-i18next.config');
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
	pl: 'pl',
	en: 'en'
};

const withPWA = require('next-pwa')({
	dest: 'public',
	disableDevLogs: true,
	disable: process.env.NODE_ENV === 'development'
});

const nextConfig = withPWA({
	rewrites: async () => nextI18NextRewrites(localeSubpaths),
	publicRuntimeConfig: {
		localeSubpaths
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}
		return config;
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	i18n
});

module.exports = nextConfig;
