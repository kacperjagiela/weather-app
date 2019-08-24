import * as React from 'react';
import { Icon } from 'antd';
import { Landing } from '../Style';

export default class Forecast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			data: '',
			error: false,
		};
		this.fetchData();
	}

	fetchData = () => {
		const { match } = this.props;
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${match.params.city}&units=metric&APPID=27b52f2d96109ac0a634c200d7092254`)
			.then(async (res) => {
				const response = await res.json();
				if (response.cod !== '404') {
					this.setState({
						data: response,
						loading: false,
						error: false,
					});
				} else {
					this.setState({
						error: true,
						loading: true,
					});
				}
			})
			.catch(() => {
				this.setState({
					error: true,
				});
			});
	}

	render() {
		const {
			loading, data, error,
		} = this.state;
		const { history } = this.props;
		const Loaded = () => {
			if (error) {
				history.push('/error');
				return null;
			} return (
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
		};

		return (
			<Landing>
				{
					(loading && !error) ? <Icon type='loading' style={{ fontSize: '3rem' }} />
						: <Loaded />
				}
			</Landing>
		);
	}
}
