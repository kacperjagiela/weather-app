/* eslint-disable */
import * as React from 'react';
import { Trans } from 'react-i18next';
import { WeatherDay } from '../Style';
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

const WeatherCard = ({ date, humidity, temp, wind, clouds, pressure, icon }) => (
	<WeatherDay>
		<p style={{ textAlign: 'center', marginBottom: '5px' }}>
			({date} 12:00)
		</p>
		<p style={{ textAlign: 'center', marginBottom: '5px' }}>
			<Trans>
				{weekDay[new Date(date).getDay()]}
			</Trans>
		</p>
		<img
			src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
			alt={icon}
			style={{
				backgroundColor: '#1890ff', minWidth: '130px',
			}}
		/>
		<p style={{ textAlign: 'center' }}>
			<Temperature temperature={temp} />
		</p>
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
