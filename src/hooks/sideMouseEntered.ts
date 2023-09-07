export type side = 'top' | 'bottom' | 'left' | 'right' | 'default';

export default function sideMouseEntered(
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>
): side {
	const { clientX, clientY } = event;
	const elem = event.target as HTMLButtonElement;
	const { left, top, right, bottom } = elem.getBoundingClientRect();

	const dLeft = Math.abs(left - clientX);
	const dRight = Math.abs(right - clientX);
	const dTop = Math.abs(top - clientY);
	const dBottom = Math.abs(bottom - clientY);

	const min = Math.min(dLeft, dRight, dTop, dBottom);

	switch (min) {
		case dLeft:
			return 'left';
		case dRight:
			return 'right';
		case dTop:
			return 'top';
		case dBottom:
			return 'bottom';
	}

	return 'default';
}
