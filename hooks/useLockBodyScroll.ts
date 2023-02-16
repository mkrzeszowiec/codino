import { useEffect, useLayoutEffect, useState } from 'react';

type UseLockedBodyOutput = [boolean, (locked: boolean) => void];

const useLockedBody = (initialLocked = false, rootId = '__next'): UseLockedBodyOutput => {
	const [locked, setLocked] = useState(initialLocked);

	useLayoutEffect(() => {
		if (!locked) {
			return;
		}

		const originalOverflow = document.body.style.overflow;
		const originalPaddingRight = document.body.style.paddingRight;
		const originalHeight = document.body.style.height;

		document.body.style.overflow = 'hidden';
		document.body.style.height = '100vh';

		const root = document.getElementById(rootId);
		const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

		if (scrollBarWidth) {
			document.body.style.paddingRight = `${scrollBarWidth}px`;
		}

		return () => {
			document.body.style.overflow = originalOverflow;
			document.body.style.height = originalHeight;

			if (scrollBarWidth) {
				document.body.style.paddingRight = originalPaddingRight;
			}
		};
	}, [locked]);

	useEffect(() => {
		if (locked !== initialLocked) {
			setLocked(initialLocked);
		}
	}, [initialLocked]);

	return [locked, setLocked];
};

export default useLockedBody;
