import React from 'react';
import SectionTitle from 'components/SectionTitle/SectionTitle';

const Map = () => (
	<section className="map">
		<SectionTitle className="map__title">Skontaktuj się z naszym zespołem</SectionTitle>

	<iframe
		className="map_iframe"
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.121264207682!2d21.008501315663704!3d52.204843779755834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccda774ae93d%3A0xb378a3ef4ea21cda!2sLudwika%20Narbutta%2053%2C%2002-529%20Warszawa!5e0!3m2!1spl!2spl!4v1674555221905!5m2!1spl!2spl"
		height="470"
		style={{ border: 0, width: '100%' }}
		allowFullScreen={true}
		loading="lazy"
		referrerPolicy="no-referrer-when-downgrade"
	></iframe>
	</section>
);

export default Map;
