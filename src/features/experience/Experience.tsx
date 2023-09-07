import { WorkTogether } from './work_together/WorkTogether';
import { Wave } from './Wave';
import { Star } from './stars/Star';
import { useState } from 'react';
import experience from '../../assets/experience.json';
import { WorkPlace } from './exp/WorkPlace';
import { motion } from 'framer-motion';
import { AnimatedText } from '../animated_text/AnimatedText';

type keys = keyof typeof experience;

const text = `I am not only a highly hardworking and self-motivated person, but I am
also a dedicated self-learner. I possess a deep desire to expand my
knowledge and acquire new skills independently. Challenges are embraced
as opportunities for personal growth, and I eagerly take on new subjects
and tasks. My relentless pursuit of self-improvement, combined with my
strong work ethic, fuels my success and serves as an inspiration to
those around me.`;

export const Experience = () => {
	const [showStars, setShowStars] = useState(false);
	const [viewEntered, setViewEntered] = useState(false);

	return (
		<section className='red'>
			<Wave />
			<motion.h1
				id='exp'
				onViewportEnter={() => {
					setViewEntered(true);
				}}
				whileInView={{
					y: [-30, 0],
					opacity: [0, 1],
					scaleY: [0.1, 1],
					skewY: [-7, 0, 7, 0],
				}}
				transition={{
					duration: 0.4,
					delay: 0.6,
				}}
			>
				Experince
			</motion.h1>
			<AnimatedText text={text} start={viewEntered} />

			{Object.keys(experience).map((exp) => (
				<WorkPlace data={experience[exp as keys]} key={exp} />
			))}
			<Star display={showStars} />
			<WorkTogether setShowStars={setShowStars} showStars={showStars} />
		</section>
	);
};
