/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import { Icon } from 'antd';
import { Trans } from 'react-i18next';
import { Landing } from '../Style';
import Back from '../Reusable/Back';
import Temperature from '../Reusable/Temperature';

const Forecast = ({ history, match }) => {
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState('');
	const [error, setError] = React.useState(false);
	const [ready, setReady] = React.useState(false);
	const [temperature, setTemperature] = React.useState(0);

	React.useEffect(() => {
		const fetchData = () => {
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${match.params.city}&units=metric&APPID=27b52f2d96109ac0a634c200d7092254`)
				.then(async (res) => {
					const response = await res.json();
					if (response.cod !== '404' && !ready) {
						await setData(response);
						setError(false);
						setLoading(false);
						setReady(true);
						setTemperature(response.main.temp.toFixed(1));
					} else {
						setError(true);
						setLoading(true);
					}
				})
				.catch(() => {
					setError(true);
				});
		};
		fetchData();
		// eslint-disable-next-line
	}, []);

	const Loaded = () => {
		if (error) {
			history.push('/error');
			return null;
		} return (
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
					<Temperature temperature={temperature} />
				</h1>
			</Landing>
		);
	};


	return (
		<Landing>
			{
				(loading && !error) ? <Icon type='loading' style={{ fontSize: '3rem' }} />
					: <Loaded />
			}
		</Landing>
	);
};

export default Forecast;
