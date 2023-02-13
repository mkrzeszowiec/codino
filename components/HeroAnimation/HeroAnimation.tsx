import Head from 'next/head';
import RenderIfVisible from 'react-render-if-visible';

const HeroAnimation = () => {

	return (
		<RenderIfVisible>
			<Head>
				<script type="text/javascript" defer src="../star-animation/vendors.js"></script>
				<script type="text/javascript" defer src="../star-animation/index.js"></script>
			</Head>

			<div id="hero-animation" />
			<div className="background-hero-animation" />
			<div className="overlay-hero-animation" />
		</RenderIfVisible>
	);
};

export default HeroAnimation;
