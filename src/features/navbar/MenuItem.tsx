import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		display: 'none',
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

type MenuItemProps = {
	text: string;
	icon: IconDefinition;
	color: string;
	to: string;
};

export const MenuItem = ({ text, icon, color, to }: MenuItemProps) => {
	const style = { border: `2px solid ${color}`, color: `${color}` };

	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			onClick={() => {
				document
					.getElementById(to)
					?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}}
		>
			<div className='icon-placeholder' style={style}>
				<FontAwesomeIcon icon={icon} />
			</div>
			<div className='text-placeholder' style={style}>
				{text}
			</div>
		</motion.li>
	);
};
