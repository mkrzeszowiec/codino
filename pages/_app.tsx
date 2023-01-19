import React, { Fragment } from 'react';
import type { AppProps } from 'next/app';

// global styles
// import 'swiper/swiper.scss';
// import 'rc-slider/assets/index.css';
// import 'react-rater/lib/react-rater.css';
import '../assets/css/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Fragment>
			<Component {...pageProps} />
		</Fragment>
	);
};

export default MyApp;
