/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import { Icon } from 'antd';
import { Landing } from '../Style';

const Forecast = ({ history, match }) => {
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState('');
	const [error, setError] = React.useState(false);
	const [ready, setReady] = React.useState(false);

	React.useEffect(() => {
		const fetchData = () => {
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${match.params.city}&units=metric&APPID=27b52f2d96109ac0a634c200d7092254`)
				.then(async (res) => {
					const response = await res.json();
					if (response.cod !== '404' && !ready) {
						setData(response);
						setError(false);
						setLoading(false);
						setReady(true);
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
	}, []);

	const Loaded = () => {
		if (error) {
			history.push('/error');
			return null;
		} return (
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
