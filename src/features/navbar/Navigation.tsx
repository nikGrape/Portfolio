import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import {
	faBookOpen,
	faRainbow,
	faUser,
	faBriefcase,
	faAddressBook,
	faListCheck,
} from '@fortawesome/free-solid-svg-icons';

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const Navigation = () => (
	<motion.ul variants={variants}>
		{navigationPoints.map((item, i) => (
			<MenuItem {...item} key={`menu-item-${i}`} />
		))}
	</motion.ul>
);

// $blue-color: #3c31dd;
// $red-color: #c03528;
// $pink-color: #90204f;
// $pink-old-color: #c62368;
// $brown-color: #763500;
// $dark-color: #242424;
// $darker-color: #101010;

const navigationPoints = [
	{
		text: 'Intro',
		icon: faRainbow,
		color: '#FF008C',
		to: 'intro',
	},
	{
		text: 'About Me',
		icon: faUser,
		color: '#D309E1',
		to: 'me',
	},
	{
		text: 'Experience',
		icon: faBriefcase,
		color: '#9C1AFF',
		to: 'exp',
	},
	{
		text: 'Projects',
		icon: faListCheck,
		color: '#7700FF',
		to: 'projects',
	},
	{
		text: 'Contacts',
		icon: faAddressBook,
		color: '#4400FF',
		to: 'contacts',
	},
	{
		text: 'About',
		icon: faBookOpen,
		color: '#564390',
		to: 'about',
	},
];
