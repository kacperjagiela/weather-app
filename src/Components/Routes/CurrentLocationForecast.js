import * as React from 'react';
import { Icon } from 'antd';
import { Landing } from '../Style';

export default class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			data: '',
		};
		this.fetchData();
	}

	fetchData = () => {
		const { match } = this.props;
		// https for heroku
		fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${match.params.latitude}&lon=${match.params.longitude}&units=metric&APPID=27b52f2d96109ac0a634c200d7092254`)
			.then(async (res) => {
				this.setState({
					data: await res.json(),
					loading: false,
				});
			})
			.catch((err) => {
				throw err;
			});
	}

	render() {
		const { loading, data } = this.state;
		const Loaded = () => (
			<Landing>
				<h1>
					Your location:
					{' '}
					{data.name}
					{' '}
					{data.sys.country}
				</h1>
				<h1>
					Today will be:
					{' '}
					{data.weather[0].main}
				</h1>
				<h1>
					Temperature for your location:
					{' '}
					{data.main.temp}
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
	}
}
