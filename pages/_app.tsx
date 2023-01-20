import React, { Fragment } from 'react';
import type { AppProps } from 'next/app';
import '../assets/css/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Fragment>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default MyApp;
