import * as React from 'react';
import { Icon } from 'antd';
import { Trans } from 'react-i18next';
import WeatherCard from '../reusable/WeatherCard';
import checkModulo from '../../functions/checkModulo';
import {
	Landing, LandingPageInputs, Title, Arrow, WeatherCarousel,
} from '../Style';
import changeUrl from '../../functions/changeUrl';
import Back from '../reusable/Back';

const CurrentLocationForecast = ({ match, history }) => {
	const [loading, setLoading] = React.useState(true);
	const [data, setData] = React.useState('');
	const [listDays, setListDays] = React.useState([]);
	const carousel = React.useRef(React.createRef());

	const next = () => carousel.current.next();

	const prev = () => carousel.current.prev();

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
					changeUrl(history, '/error');
					return null;
				});
		};
		fetchData();
	}, [history, match]);

	const Loaded = () => {
		if (loading) {
			return (<Icon type='loading' style={{ fontSize: '3rem' }} />);
		}
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
	};

	return (
		<Landing>
			<Loaded />
		</Landing>
	);
};

export default CurrentLocationForecast;
