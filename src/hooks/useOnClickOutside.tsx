import { RefObject, useEffect } from 'react';

type Handler = (event: MouseEvent) => void;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: Handler,
	mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void {
	useEffect(() => {
		const listener = (event: MouseEvent) => {
			const el = ref?.current;

			if (!el || el.contains(event.target as Node)) {
				return;
			}

			handler(event);
		};
		addEventListener(mouseEvent, listener);

		return () => {
			removeEventListener(mouseEvent, listener);
		};
	});
}
