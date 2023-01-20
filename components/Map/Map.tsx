import React, { useEffect } from 'react';
import { getIsServerSide } from 'utils/utils';

const center = { lat: 51.267164, lng: 20.948894 };
const mapProps = {
	options: {
		center,
		zoom: 17
	},
	onMount: map => {
		// @ts-ignore
		new window.google.maps.Marker({
			position: center,
			map,
			title: 'LiteraCafe'
		});
	}
};

const MAP_ID = 'codino-map';

const Map = () => {
	useEffect(() => {
		if (getIsServerSide()) return;

		// @ts-ignore
		if (!window.google) {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = `https://maps.google.com/maps/api/js?key=AIzaSyDljx8vYfkFaB0rIaBs0VBU1X3vRehoFXc`;
			const headScript = document.getElementsByTagName('script')[0];
			headScript.parentNode.insertBefore(script, headScript);
			script.addEventListener('load', () => {
				onLoad();
			});
		} else {
			onLoad();
		}
	}, []);

	const onLoad = () => {
		// @ts-ignore
		const map = new window.google.maps.Map(document.getElementById(MAP_ID), mapProps.options);
		mapProps.onMount(map);
	};

	return <div style={{ height: `50vh` }} id={MAP_ID} />;
};

export default Map;
