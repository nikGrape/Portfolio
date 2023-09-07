import { PulseLine } from './PulseLine';
import './pulsar.scss';

export const Pulsar = () => {
	return (
		<div className='pulsar'>
			{[1, 2, 3, 4].map((k) => (
				<PulseLine key={`pulse-line-${k}`} id={k} />
			))}
		</div>
	);
};
