import * as React from 'react';
import { Trans } from 'react-i18next';
import { WeatherDay, WeatherIcon, WeatherProperty } from './Style';
import Temperature from './Temperature';

const weekDay = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const WeatherCard = ({ day }) => (
	<WeatherDay
		bodyStyle={{ padding: '5px' }}
		cover={
			(
				<WeatherIcon
					src={`http://openweathermap.org/img/wn/${day.weather[0].icon.replace('n', 'd')}@2x.png`}
					alt={day.weather[0].icon.replace('n', 'd')}
				/>
			)
		}
	>
		<p style={{ textAlign: 'center', marginBottom: '5px' }}>
			(
			{day.dt_txt.slice(0, day.dt_txt.indexOf(' '))}
			)
		</p>
		<p style={{ textAlign: 'center', marginBottom: '5px', fontWeight: 'bold' }}>
			<Trans>
				{weekDay[new Date(day.dt_txt.slice(0, day.dt_txt.indexOf(' '))).getDay()]}
			</Trans>
		</p>
		<div style={{ textAlign: 'center' }}>
			<Temperature temperature={day.main.temp.toFixed(1)} />
		</div>
		<WeatherProperty>
			<Trans>Pressure</Trans>
			{' '}
			<span>
				{day.main.pressure}
			</span>
		</WeatherProperty>
		<WeatherProperty>
			<Trans>Clouds</Trans>
			{' '}
			<span>
				{day.clouds.all}
				%
			</span>
		</WeatherProperty>
		<WeatherProperty>
			<Trans>Wind</Trans>
			{' '}
			<span>
				{`${day.wind.speed} m/s`}
			</span>
		</WeatherProperty>
		<WeatherProperty>
			<Trans>Humidity</Trans>
			{' '}
			<span>
				{day.main.humidity}
				%
			</span>
		</WeatherProperty>
	</WeatherDay>
);

export default WeatherCard;
