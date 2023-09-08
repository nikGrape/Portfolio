import { styled } from 'styled-components';
import './keyframes.scss';

export const Button = styled.button<{ $animation_type: string }>`
	color: black;
	width: 100px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all ease-in-out 300ms;
	z-index: 2;
	user-select: none;
	outline: none;
	border: none;
	animation: ${(props) => props.$animation_type}
		${(props) => {
			switch (props.$animation_type) {
				case 'hide':
					return '400ms';
				case 'appear':
					return '2500ms'; //ease-in-out
				default:
					return '300ms';
			}
		}}
		ease-out 1 forwards;
`;
