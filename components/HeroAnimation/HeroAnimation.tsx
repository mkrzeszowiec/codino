import Head from 'next/head';

const HeroAnimation = () => {

	return (
		<>
			<Head>
				<script type="text/javascript" defer src="../star-animation/vendors.js"></script>
				<script type="text/javascript" defer src="../star-animation/index.js"></script>
			</Head>

			<div id="hero-animation" />
			<div className="background-hero-animation" />
			<div className="overlay-hero-animation" />
		</>
	);
};

export default HeroAnimation;
