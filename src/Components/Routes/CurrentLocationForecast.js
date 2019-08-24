/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import { Icon } from 'antd';
import { Landing } from '../Style';

const CurrentLocationForecast = ({ match, history }) => {
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState('');

	React.useEffect(() => {
		const fetchData = () => {
			// https for heroku
			fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${match.params.latitude}&lon=${match.params.longitude}&units=metric&APPID=27b52f2d96109ac0a634c200d7092254`)
				.then(async (res) => {
					setData(await res.json());
					setLoading(false);
				})
				.catch(() => {
					history.push('/error');
					return null;
				});
		};

		fetchData();
	}, []);

	const Loaded = () => (
		<Landing>
			<h1>
				Your location: {data.name} {data.sys.country}
			</h1>
			<h1>
				Today will be: {data.weather[0].main}
			</h1>
			<h1>
				Temperature for your location: {data.main.temp}
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
