/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import { Icon } from 'antd';
import { Trans } from 'react-i18next';
import { Landing } from '../Style';
import Back from '../Reusable/Back';

const CurrentLocationForecast = ({ match, history }) => {
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState('');
	const [unit, setUnit] = React.useState('celsius');
	const [temperature, setTemperature] = React.useState(0);

	React.useEffect(() => {
		const fetchData = () => {
			// https for heroku
			fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${match.params.latitude}&lon=${match.params.longitude}&units=metric&APPID=27b52f2d96109ac0a634c200d7092254`)
				.then(async (res) => {
					const response = await res.json();
					setData(response);
					setLoading(false);
					setTemperature(response.main.temp.toFixed(1));
				})
				.catch(() => {
					history.push('/error');
					return null;
				});
		};
		fetchData();
	}, []);

	const changeUnit = (temp) => {
		if (unit === 'celsius') {
			setTemperature((temp * 1.8 + 32).toFixed(1));
			setUnit('fahrenheit');
		} else {
			setTemperature(((temp - 32) / 1.8).toFixed(1));
			setUnit('celsius');
		}
	};

	const Loaded = () => (
		<Landing>
			<Back history={history} />
			<h1>
				<Trans>Your location</Trans> {data.name} {data.sys.country}
			</h1>
			<h1>
				<Trans>Today will be</Trans> {data.weather[0].main}
			</h1>
			<h1>
				<Trans>Temperature for your location</Trans>{' '}
				<span
					role='button'
					tabIndex={0}
					onKeyPress={() => changeUnit(temperature)}
					onClick={() => changeUnit(temperature)}
					style={{
						cursor: 'pointer',
						textDecoration: 'underline',
					}}
				>
					{temperature}
					{
						unit === 'celsius' ? <>&#8451;</>
							: <>&#8457;</>
					}
				</span>
			</h1>
		</Landing>
	);

	return (
		<Landing>
			{
				loading ? <Icon type='loading' style={{ fontSize: '3rem' }} />
					: <Loaded />
			}
		</Landing>
	);
};

export default CurrentLocationForecast;
