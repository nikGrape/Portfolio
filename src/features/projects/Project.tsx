import { useState } from 'react';

import { motion } from 'framer-motion';

const variants = {
	appear: { opacity: [0, 1], x: [-200, 0] },
	hide: { opacity: [1, 0], x: [0, -200] },
};

type ProjectProps = {
	header: string;
	desc: string;
	image: string;
	links: string[];
};

export const Project = ({ header, desc, image, links }: ProjectProps) => {
	const [onView, setOnView] = useState(false);

	return (
		<div className='project'>
			<motion.span
				onViewportEnter={() => setOnView(true)}
				onViewportLeave={() => setOnView(false)}
				className='image-box'
			>
				{/* <img src={image} alt='project-picture' /> */}
			</motion.span>
			<motion.h3
				variants={variants}
				animate={onView ? 'appear' : 'hide'}
				transition={{
					delay: 0.3,
					type: 'tween',
				}}
				className='header'
			>
				{header}
			</motion.h3>
			<motion.span
				className='links'
				variants={variants}
				animate={onView ? 'appear' : 'hide'}
				transition={{
					delay: 0.5,
					type: 'spring',
					stiffness: 150,
				}}
			>
				<a href={links[0]}>Deploy</a>
				<a href={links[1]}>GitHub</a>
			</motion.span>

			<motion.p
				className='desc'
				variants={variants}
				animate={onView ? 'appear' : 'hide'}
				transition={{
					delay: 0.7,
					type: 'spring',
					stiffness: 150,
				}}
			>
				{desc}
			</motion.p>
		</div>
	);
};
