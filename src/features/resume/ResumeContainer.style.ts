import { styled } from 'styled-components';

export const ResumeContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	.desc {
		margin-left: 50px;
	}

	@media (max-width: 800px) {
		flex-direction: column;

		.desc {
			text-align: center;
			margin-left: 0px;
		}
	}
`;
