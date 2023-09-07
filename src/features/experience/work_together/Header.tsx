import { motion } from 'framer-motion';
import './header.scss';

const variant1 = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: 1000 },
};

const variant2 = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: -500 },
};

export const Header = ({ yesClicked }: { yesClicked: boolean }) => {
	return (
		<div
			style={{
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				height: '40px',
				width: '390px',
				marginBottom: '30px',
				padding: '0px',
			}}
		>
			<motion.h2
				className='header'
				initial={{ x: 0 }}
				animate={yesClicked ? 'closed' : 'open'}
				transition={{ duration: 0.5 }}
				variants={variant1}
				style={{ marginTop: 0 }}
			>
				Lets Work Together
			</motion.h2>
			<motion.h2
				className='header'
				initial={{ x: -1000 }}
				variants={variant2}
				transition={{
					type: 'spring',
					stiffness: 100,
				}}
				animate={yesClicked ? 'open' : 'close'}
				style={{ position: 'absolute', marginTop: 0 }}
			>
				Looking forward to it!
			</motion.h2>
		</div>
	);
};
