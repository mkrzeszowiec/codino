import { useCallback, useEffect, useState } from 'react';
import { createPortal, unmountComponentAtNode } from 'react-dom';
import { getIsServerSide } from 'utils/utils';

//todo fix, use ready library
const usePortal = el => {
	const [portal, setPortal] = useState<any>({
		render: () => null,
		remove: () => null
	});

	const addPortal = useCallback(el => {
		if (getIsServerSide() || !el) {
			return;
		}

		const Portal = ({ children }) => createPortal(children, el);
		const remove = (el): any => unmountComponentAtNode(el);
		return { render: Portal, remove };
	}, []);

	useEffect(() => {
		if (getIsServerSide()) {
			return;
		}

		if (el) portal.remove();
		const newPortal = addPortal(el);
		setPortal(newPortal);

		return () => newPortal.remove(el);
	}, [el]);

	return portal?.render || '';
};

export default usePortal;
