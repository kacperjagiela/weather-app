import * as React from 'react';
import { Icon } from 'antd';
import { Trans } from 'react-i18next';
import WeatherCard from '../reusable/WeatherCard';
import checkModulo from '../../functions/checkModulo';
import {
	Landing, Title, LandingPageInputs, Arrow, WeatherCarousel,
} from '../Style';
import Back from '../reusable/Back';
import changeUrl from '../../functions/changeUrl';

const Forecast = ({ history, match }) => {
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState('');
	const [listDays, setListDays] = React.useState([]);
	const [error, setError] = React.useState(undefined);
	const carousel = React.useRef(React.createRef());

	const next = () => carousel.current.next();

	const prev = () => carousel.current.prev();

	React.useEffect(() => {
		const fetchData = () => {
			fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${match.params.city}&units=metric&APPID=27b52f2d96109ac0a634c200d7092254`)
				.then(async (res) => {
					const response = await res.json();
					if (response.cod !== '404') {
						const hours = checkModulo(new Date().getHours(), 3);
						setData(response);
						setListDays(response.list.filter((i) => i.dt_txt.includes(`${hours}:00:00`)));
						setError(false);
						setLoading(false);
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
	}, [history, match]);

	const Loaded = () => {
		if (error) {
			changeUrl(history, '/error');
		} else if (loading && !error) {
			return (<Icon type='loading' style={{ fontSize: '3rem' }} />);
		} else if (data.cod !== '404') {
			return (
				<Landing>
					<Back history={history} />
					<Title>
						<Trans>Your location</Trans>
						{` ${data.city.name} `}
						{`${data.city.country}`}
					</Title>
					<LandingPageInputs style={{ alignItems: 'center' }}>
						<Arrow
							type='left-circle'
							onClick={() => prev()}
						/>
						<WeatherCarousel
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
										day={day}
									/>
								))
							}
						</WeatherCarousel>
						<Arrow
							type='right-circle'
							onClick={() => next()}
						/>
					</LandingPageInputs>
				</Landing>
			);
		}
		return null;
	};


	return (
		<Landing>
			<Loaded />
		</Landing>
	);
};

export default Forecast;
