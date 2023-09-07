import { useRef } from 'react';
import { AnimatedText } from '../animated_text/AnimatedText';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const about = `This page was made as a brighter version of My resume. I tried to make it  stylish and iteresting, hope I didn't over done it.
  I used React, TypeScript, Framer Motion and Adobe Illustrator`;

export const About = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<section className='dark'>
			<motion.h1 id='about'>
				{'About'.split('').map((letter, i) => (
					<motion.p
						key={`contact-header-letter-${letter}-n${i}`}
						style={{ display: 'inline-block' }}
						whileInView={{
							translateY: ['0px', '-15px', '0px'],
							rotate: [0, i * 2 - 4, 0],
						}}
						transition={{
							duration: 0.5,
							delay: 0.5 + i * 0.17,
						}}
					>
						{letter}
					</motion.p>
				))}
			</motion.h1>
			<AnimatedText ref={ref} text={about} start={isInView} />
		</section>
	);
};
