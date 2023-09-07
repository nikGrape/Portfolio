import star from '../../../assets/star.svg';
import './star.scss';

export const Star = (props: { display: boolean }) => {
	return (
		<>
			{props.display &&
				Array.from({ length: 100 }).map((_, i) => (
					<div
						className='star'
						key={`star-${i}`}
						style={{
							bottom: Math.floor(Math.random() * 700) + 'px',
							left: Math.floor(Math.random() * 1000) + 'px',
							animationDelay: Math.floor(Math.random() * 3500) + 'ms',
						}}
					>
						<img src={star} alt='Star' />
					</div>
				))}
		</>
	);
};
