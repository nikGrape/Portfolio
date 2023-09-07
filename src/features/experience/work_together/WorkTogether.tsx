import { Header } from './Header';
import { RunAwayButton } from '../runaway_button/RunAwayButton';
import { useState } from 'react';
import './worktogether.scss';

export const WorkTogether = ({
	showStars,
	setShowStars,
}: {
	showStars: boolean;
	setShowStars: (arg: boolean) => void;
}) => {
	const [yesClicked, setYesClicked] = useState(false);

	const handleYes = () => {
		if (showStars) return;
		setShowStars(true);
		setYesClicked(true);
		setTimeout(() => {
			setShowStars(false);
		}, 5000);
	};
	return (
		<div className='wt'>
			<Header yesClicked={yesClicked} />
			<div
				style={{
					zIndex: 2,
					width: 'auto',
					display: 'flex',
				}}
			>
				<button
					style={{
						height: '30px',
						width: '100px',
						marginRight: '30px',
						zIndex: 3,
						userSelect: 'none',
						outline: 'none',
					}}
					onClick={handleYes}
				>
					YES
				</button>
				<RunAwayButton text='NO' />
			</div>
		</div>
	);
};
