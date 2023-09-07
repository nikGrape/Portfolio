import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { Li } from './Li.style';
import { MenuButton } from '../MenuButton.style';

export const PrettyTop = () => {
	const [isOpen, toggle] = useState<boolean>(false);

	const container = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.22,
			},
		},
	};

	const item = {
		hidden: {
			opacity: 0,
			y: -50,
			scaleY: 0.1,
		},
		show: {
			opacity: 1,
			y: 0,
			scaleY: [0.5, 1],
		},
	};

	return (
		<div>
			<MenuButton onClick={() => toggle((isOpen) => !isOpen)}>
				<p>{isOpen ? 'X' : 'O'}</p>
			</MenuButton>
			<motion.ul
				variants={container}
				initial='hidden'
				animate={isOpen ? 'show' : 'hidden'}
			>
				<Li variants={item}>Intro</Li>
				<Li variants={item}>About Me</Li>
				<Li variants={item}>Experience</Li>
				<Li variants={item}>Projects</Li>
				<Li variants={item}>Contacts</Li>
				<Li variants={item}>About</Li>
			</motion.ul>
		</div>
	);
};
