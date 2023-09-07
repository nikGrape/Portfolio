export const PulseLine = (props: { id: number }) => {
	return (
		<div className='puls-line' id={'pulse' + props.id}>
			<div className='impulse'></div>
		</div>
	);
};
