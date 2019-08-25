import styled from 'styled-components';
import { Button, Card } from 'antd';

export const BackButton = styled(Button)`
	position: absolute;
	top: 20px;
	left: 40px;
	width: 90px;
`;

export const TemperatureButton = styled(Button)`
	cursor: pointer;
	margin-top: 5px;
	margin-bottom: 5px;
`;

export const WeatherDay = styled(Card)`
	width: 240px;
	margin: 0 auto;
	text-align: left;
	font-size: 1.4vw;

	@media screen and (max-width: 768px) {
		width: 180px;
		font-size: 2vw;
	}

	@media (min-width:1400px){
		width:350px;
		font-size: 1vw;
	}

	@media screen and (max-width: 600px) {
		width: 140px;
		font-size: 2.5vw;
	}
`;

export const WeatherIcon = styled.img`
	width: 140px;
	margin: 0 auto;
	
	@media screen and (max-width: 768px) {
		width: 80px;
	}
`;

export const WeatherProperty = styled.p`
	display:flex;
	justify-content: space-between;
`;
