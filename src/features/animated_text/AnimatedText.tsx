import { motion } from 'framer-motion';
import { useState, forwardRef } from 'react';

type AnimatedTextProps = {
	text: string;
	start?: boolean;
	repeat?: boolean;
};

export const AnimatedText = forwardRef(
	(
		{ text, start = false, repeat = false }: AnimatedTextProps,
		ref: React.Ref<HTMLParagraphElement>
	) => {
		const [inView, setInView] = useState(false);

		return (
			<motion.p
				ref={ref}
				style={{ textAlign: 'center', fontSize: 'large', marginBottom: '10vh' }}
				onViewportEnter={() => {
					setInView(true);
				}}
				onViewportLeave={() => {
					setInView(false);
				}}
			>
				{text.split(' ').map((word, i) => (
					<motion.span
						key={word + i}
						animate={
							repeat
								? inView
									? { x: [-7, 0], opacity: [0, 1] }
									: {}
								: start
								? { x: [-7, 0], opacity: [0, 1] }
								: {}
						}
						transition={{ delay: 0.3 + 0.05 * i }}
					>
						{` ${word} `}
					</motion.span>
				))}
			</motion.p>
		);
	}
);
