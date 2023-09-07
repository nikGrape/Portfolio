import { AnimatedText } from '../animated_text/AnimatedText';
import { Pulsar } from '../pulsar/Pulsar';
import { StackTreadmill } from '../stack_treadmill/StackTreadmill';
import { motion } from 'framer-motion';

const text = `I am truly passionate about React development and possess exceptional
skills in this field. My expertise shines through the high-quality and
efficient applications I create. I stay updated with the latest React
trends and best practices, constantly expanding my knowledge. The
seamless integration of development and design reflects my commitment to
delivering exceptional user experiences. My dedication and enthusiasm
for React inspire those around me to explore its potential.`;

export const Intro = () => {
	return (
		<section className='blue'>
			<h1 id='intro'>Nick Vinogradov</h1>
			<h3>React Developer</h3>
			<Pulsar />
			<AnimatedText text={text} repeat={true} />
			<motion.h2
				whileInView={{
					y: [-70, -50, 0],
					rotate: [-90, -90, 0],
					opacity: [0, 1, 1],
				}}
				transition={{ delay: 0.4, type: 'spring' }}
			>
				My Stack:
			</motion.h2>
			<StackTreadmill />
		</section>
	);
};
