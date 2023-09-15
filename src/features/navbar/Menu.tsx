import { useEffect, useRef, useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation.tsx';
import './styles.scss';
import { useOnClickOutside } from '../../hooks/useOnClickOutside.tsx';

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(30px at 40px 40px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

export const Menu = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const [showButtons, toggleShowButtons] = useState(false);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	useOnClickOutside(containerRef, () => {
		if (isOpen) toggleOpen();
	});

	useEffect(() => {
		if (!isOpen) {
			const timeout = setTimeout(() => {
				toggleShowButtons(false);
			}, 1000);

			return () => {
				clearTimeout(timeout);
			};
		}
	}, [isOpen]);

	return (
		<motion.nav
			id='navbar'
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}
		>
			<motion.div className='background' variants={sidebar} />
			{(showButtons || isOpen) && <Navigation />}
			<MenuToggle
				toggle={() => {
					if (!isOpen) {
						toggleShowButtons(true);
						setTimeout(() => {
							toggleOpen();
						}, 1);
					} else {
						toggleOpen();
					}
				}}
			/>
		</motion.nav>
	);
};
