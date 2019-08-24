import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

export const Title = styled.h1`
	font-size:3vw;

	@media screen and (max-width: 768px){
		font-size:5vw;
	}
`;

export const Landing = styled.div`
	width: 100vw;
	min-height: 90vh;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	animation: ${fadeIn} 0.9s ease-in-out;
	
	@media screen and (max-width:768px){
		padding-top:2vh;
	}
`;

export const LandingPageInputs = styled.div`
	margin-top:2vh;
	display: flex;
	flex-direction: row;
	justify-content:center;

	@media screen and (max-width:768px) {
		flex-wrap:wrap;
	}
`;

export const WeatherDay = styled.div`
	margin-left: 20px;
	margin-right: 20px;
	margin-bottom: 20px;
	padding-top: 5px;
	padding-left:5px;
	padding-right:5px;
	text-align: left;
	min-sidth: 130px;
	background-color: #fff;
`;
