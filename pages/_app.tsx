import React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import 'react-tooltip/dist/react-tooltip.css'
import 'assets/css/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
