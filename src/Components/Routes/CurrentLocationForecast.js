/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import { Icon } from 'antd';
import { Trans } from 'react-i18next';
import checkModulo from '../../functions/checkModulo';
import { Landing, LandingPageInputs, Title } from '../Style';
import Back from '../Reusable/Back';
import WeatherCard from '../Reusable/WeatherCard';

const CurrentLocationForecast = ({ match, history }) => {
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState('');
	const [listDays, setListDays] = React.useState([]);

	React.useEffect(() => {
		const fetchData = () => {
			// https for heroku
			fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${match.params.latitude}&lon=${match.params.longitude}&units=metric&APPID=27b52f2d96109ac0a634c200d7092254`)
				.then(async (res) => {
					const response = await res.json();
					const hours = checkModulo(new Date().getHours(), 3);
					setData(response);
					setListDays(response.list.filter((i) => i.dt_txt.includes(`${hours}:00:00`)));
					setLoading(false);
				})
				.catch(() => {
					history.push('/error');
					return null;
				});
		};
		fetchData();
		// eslint-disable-next-line
	}, []);

	const Loaded = () => (
		<Landing>
			<Back history={history} />
			<Title>
				<Trans>Your location</Trans> {data.city.name} {data.city.country}
			</Title>
			<LandingPageInputs style={{ flexWrap: 'wrap' }}>
				{
					listDays.map((day) => (
						<WeatherCard
							key={day.dt}
							date={day.dt_txt.slice(0, day.dt_txt.indexOf(' '))}
							humidity={day.main.humidity}
							temp={day.main.temp.toFixed(1)}
							wind={day.wind.speed}
							clouds={day.clouds.all}
							pressure={day.main.pressure}
							icon={day.weather[0].icon.replace('n', 'd')}
						/>
					))
				}
			</LandingPageInputs>
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
