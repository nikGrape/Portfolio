import { useState } from 'react';
import { Button } from './RunAwayButton.style';

export const RunAwayButton = (props: { text: string }) => {
	const [animationClass, setAnimationClass] = useState<string>('');
	const [animationCount, setAnimationCount] = useState<number>(0);
	const [ready, setReady] = useState<boolean>(true);
	const [clearTimout, setClearTimout] =
		useState<ReturnType<typeof setTimeout>>();

	const handleGoBack = (direction: string, count: number) => {
		const tmp = setTimeout(() => {
			setAnimationClass(direction);
			setAnimationCount(count);
		}, 3000);
		setClearTimout(tmp);
	};

	const runAway = () => {
		if (!ready) return;
		setReady(false);
		clearTimeout(clearTimout);

		switch (animationCount) {
			case 0:
				setAnimationClass('run-right');
				setAnimationCount(1);
				handleGoBack('run-left', 0);
				setTimeout(() => setReady(true), 300);
				break;

			case 1:
				setAnimationClass('run-left');
				setAnimationCount(2);
				setTimeout(() => setReady(true), 300);

				break;

			case 2:
				setAnimationClass('roll-up');
				setAnimationCount(3);
				handleGoBack('roll-down', 2);
				setTimeout(() => setReady(true), 300);

				break;

			case 3:
				setAnimationClass('roll-down');
				setAnimationCount(4);
				setTimeout(() => setReady(true), 300);

				break;

			case 4:
				setAnimationClass('flip-up');
				setAnimationCount(5);
				handleGoBack('flip-down', 4);
				setTimeout(() => setReady(true), 300);

				break;

			case 5:
				setAnimationClass('flip-down');
				setAnimationCount(6);
				setTimeout(() => setReady(true), 300);

				break;
			default:
				setTimeout(() => setReady(true), 2900);
				setAnimationClass('hide');
				setTimeout(() => {
					setAnimationClass('appear');
					setAnimationCount(0);
				}, 1200);
		}
	};

	return (
		<Button
			$animation_type={animationClass}
			onMouseEnter={runAway}
			onTouchStart={runAway}
		>
			{props.text}
		</Button>
	);
};
