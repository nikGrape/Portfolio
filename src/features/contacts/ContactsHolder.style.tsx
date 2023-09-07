import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const ContactsHolder = styled(motion.div)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	@media (width < 700px) {
		flex-direction: column;
	}
`;
