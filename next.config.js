const path = require('path');
const { i18n } = require('./next-i18next.config');

const withPWA = require('next-pwa')({
	dest: 'public',
	disableDevLogs: true,
	disable: process.env.NODE_ENV === 'development'
});

const nextConfig = withPWA({
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
