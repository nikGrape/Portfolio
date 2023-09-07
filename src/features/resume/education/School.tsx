import './school.scss';
import { motion } from 'framer-motion';

type SchoolProps = {
	data: {
		url: string;
		logoURL: string;
		header: string;
		desc: string;
		achieve: string[];
	};
};

export const School = ({ data }: SchoolProps) => {
	const { logoURL, header, desc, achieve, url } = data;
	return (
		<div>
			<span className='school-container'>
				<a href={url} target='_blank' className='logo'>
					<motion.img
						whileHover={{ scale: 1.3, rotate: '360deg' }}
						transition={{ velocity: 0.9, type: 'spring' }}
						src={logoURL}
						alt={`${header} picture`}
						className='logo'
					/>
				</a>
				<motion.h3
					whileInView={{ x: [-20, 0], opacity: [0, 1] }}
					transition={{ velocity: 0.3, delay: 0.2 }}
					className='header'
				>
					{header}
				</motion.h3>
				<motion.p className='desc'>{desc}</motion.p>
			</span>
			<ul className='achieve'>
				{achieve.map((point, i) => (
					<motion.li
						key={point.substring(0, 10)}
						whileInView={{ y: [-20, 0], opacity: [0, 1] }}
						transition={{ delay: 0.4 + 0.2 * i }}
					>
						{point}
					</motion.li>
				))}
			</ul>
		</div>
	);
};
