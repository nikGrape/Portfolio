import { ResumeContainer } from './ResumeContainer.style';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './resume.scss';
import { Education } from './education/Education';

const header = {
	open: { opacity: 1, x: [500, 0] },
	closed: { opacity: 0, x: [0, 500] },
};

const text = {
	open: { x: [300, 0], opacity: 1 },
	closed: { x: [0, 300], opacity: 0 },
};

const avatar = {
	open: { x: [-900, 0], rotate: '360deg' },
	closed: { x: [0, -900], rotate: '0deg' },
};

export const Resume = () => {
	const [inVeiwPort, toggleInViewPort] = useState<boolean>(false);

	const updateViewPort = (flag: boolean) => {
		toggleInViewPort(flag);
	};

	return (
		<section className='dark'>
			<motion.h1
				animate={inVeiwPort ? 'open' : 'closed'}
				variants={header}
				transition={{ duration: 0.5 }}
				id='me'
			>
				A Little About Me
			</motion.h1>
			<ResumeContainer>
				<motion.div
					onViewportEnter={() => {
						updateViewPort(true);
					}}
					onViewportLeave={() => {
						updateViewPort(false);
					}}
				></motion.div>
				<motion.img
					className='avatar'
					animate={inVeiwPort ? 'open' : 'closed'}
					transition={{ duration: 0.7 }}
					variants={avatar}
					src='https://avatars.githubusercontent.com/u/48928594?v=4'
					alt='avatar'
				/>
				<motion.p
					className='desc'
					animate={inVeiwPort ? 'open' : 'closed'}
					variants={text}
				>
					Strong knowledge of Java and the MERN stack (React, Redux, Node,
					Express, MongoDB, Mongoose) Experience with other technologies
					including C, Python, Unix, Git, Docker, Heroku, SQL, HTML/CSS, SASS,
					JQuery, npm, and various Java frameworks and libraries
				</motion.p>
			</ResumeContainer>
			<Education />
		</section>
	);
};
