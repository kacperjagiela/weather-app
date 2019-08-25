/* eslint-disable */
import * as React from 'react';
import { Trans } from 'react-i18next';
import { Card } from 'antd';
import { WeatherDay, WeatherIcon } from '../Style';
import Temperature from './Temperature';

const weekDay = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

const WeatherCard = ({ date, humidity, temp, tempMax, tempMin, wind, clouds, pressure, icon }) => (
	<WeatherDay
		bodyStyle={{ padding: '5px' }}
		cover={
			<WeatherIcon
				src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
				alt={icon}
			/>
		}
	>
		<p style={{ textAlign: 'center', marginBottom: '5px' }}>
			({date})
		</p>
		<p style={{ textAlign: 'center', marginBottom: '5px', fontWeight: 'bold' }}>
			<Trans>
				{weekDay[new Date(date).getDay()]}
			</Trans>
		</p>
		<div style={{ textAlign: 'center' }}>
			<Temperature temperature={temp} tempMax={tempMax} tempMin={tempMin} />
		</div>
		<p>
			<Trans>Pressure</Trans> <span style={{ float: 'right' }}>{pressure}</span>
		</p>
		<p>
			<Trans>Clouds</Trans> <span style={{ float: 'right' }}>{clouds}%</span>
		</p>
		<p>
			<Trans>Wind</Trans> <span style={{ float: 'right' }}>{wind} m/s</span>
		</p>
		<p>
			<Trans>Humidity</Trans> <span style={{ float: 'right' }}>{humidity}%</span>
		</p>
	</WeatherDay>
);

export default WeatherCard;
