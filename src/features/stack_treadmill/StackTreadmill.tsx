import stackLogos from '../../assets/logos.json';
import { Container } from './Container.style';
import { Logo } from './Logo.style';
import { TargetAndTransition } from 'framer-motion';

// type keys = keyof typeof stackLogos;

export const StackTreadmill = () => {
	return (
		<Container
			drag
			dragConstraints={{
				top: 3,
				bottom: 3,
				left: -1000,
				right: 1000,
			}}
			animate={{ x: [-1200, 1200] }}
			transition={{
				duration: 40 as TargetAndTransition,
				repeat: Infinity,
				delay: 0,
				type: 'just',
			}}
		>
			{Object.values(stackLogos).map((logo) => (
				<Logo
					whileTap={{ scale: [1, 2.5, 1.8], rotate: [0, 5, -5, 0] }}
					transition={{
						duration: 0.33,
					}}
					layoutScroll={true}
					src={logo}
					alt={`logo-${logo}`}
					key={logo}
					draggable={false}
				/>
			))}
		</Container>
	);
};
