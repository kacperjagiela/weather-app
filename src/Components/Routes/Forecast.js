/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import { Icon, Carousel } from 'antd';
import { Trans } from 'react-i18next';
import checkModulo from '../../functions/checkModulo';
import { Landing, Title, LandingPageInputs } from '../Style';
import Back from '../Reusable/Back';
import WeatherCard from '../Reusable/WeatherCard';

const Forecast = ({ history, match }) => {
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState('');
	const [listDays, setListDays] = React.useState([]);
	const [error, setError] = React.useState(false);
	const [ready, setReady] = React.useState(false);
	const carousel = React.useRef(React.createRef());

	const next = () => {
		carousel.current.next();
	};

	const prev = () => {
		carousel.current.prev();
	};

	React.useEffect(() => {
		const fetchData = () => {
			fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${match.params.city}&units=metric&APPID=27b52f2d96109ac0a634c200d7092254`)
				.then(async (res) => {
					const response = await res.json();
					if (response.cod !== '404' && !ready) {
						const hours = checkModulo(new Date().getHours(), 3);
						setData(response);
						setListDays(response.list.filter((i) => i.dt_txt.includes(`${hours}:00:00`)));
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
		// eslint-disable-next-line
	}, []);

	const Loaded = () => {
		if (error) {
			history.push('/error');
			return null;
		} return (
			<Landing>
				<Back history={history} />
				<Title>
					<Trans>Your location</Trans> {data.city.name} {data.city.country}
				</Title>
				<LandingPageInputs style={{ alignItems: 'center' }}>
					<Icon
						type='left-circle'
						onClick={() => prev()}
						style={{ fontSize: '3vw' }}
					/>
					<Carousel
						// eslint-disable-next-line no-return-assign
						ref={(node) => (carousel.current = node)}
						autoplaySpeed={5000}
						infinite
						arrows
						autoplay
						style={{
							width: '50vw', paddingBottom: '25px', paddingTop: '25px',
						}}
					>
						{
							listDays.map((day) => (
								<WeatherCard
									key={day.dt}
									date={day.dt_txt.slice(0, day.dt_txt.indexOf(' '))}
									humidity={day.main.humidity}
									temp={day.main.temp.toFixed(1)}
									tempMin={day.main.temp_min.toFixed(1)}
									tempMax={day.main.temp_max.toFixed(1)}
									wind={day.wind.speed}
									clouds={day.clouds.all}
									pressure={day.main.pressure}
									icon={day.weather[0].icon.replace('n', 'd')}
								/>
							))
						}
					</Carousel>
					<Icon
						type='right-circle'
						onClick={() => next()}
						style={{ fontSize: '3vw' }}
					/>
				</LandingPageInputs>
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
