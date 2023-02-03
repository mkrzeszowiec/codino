const path = require('path');
const { i18n } = require('./next-i18next.config');

const withPWA = require('next-pwa')({
	dest: 'public'
});

module.exports = withPWA({
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	i18n
});
