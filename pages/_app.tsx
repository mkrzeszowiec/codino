import React from 'react';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { appWithTranslation } from 'next-i18next';
import 'react-tooltip/dist/react-tooltip.css';
import 'assets/css/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
			<Component {...pageProps} />
		</>
	);
};

export default appWithTranslation(MyApp);
