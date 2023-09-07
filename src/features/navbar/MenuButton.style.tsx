import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const MenuButton = styled(motion.div)`
	position: relative;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background-color: #e9e7e7;
	display: flex;
	justify-content: center;
	align-items: center;
	place-content: center;
	color: black;
	font-size: x-large;
	font-weight: 400;
	user-select: none;
`;
