import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

export const Landing = styled.div`
	width: 100vw;
	height: 90vh;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	animation: ${fadeIn} 0.9s ease-in-out;
`;

export const LandingPageInputs = styled.div`
	margin-top:2vh;
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	@media screen and (max-width:768px) {
		flex-wrap:wrap;
	}
`;
