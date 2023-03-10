export const get = url => {
	const requestOptions = {
		method: 'GET'
	};
	return fetch(url, requestOptions).then(handleResponse);
};

export const post = (url, body) => {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	};
	return fetch(url, requestOptions).then(handleResponse);
};

function handleResponse(response) {
	return response.text().then(text => {
		if (!response.ok) {
			const error = response.statusText;
			return Promise.reject(error);
		}

		return JSON.parse(text);
	});
}
