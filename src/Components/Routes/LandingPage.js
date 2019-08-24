import * as React from 'react';
import {
	Typography, Input, Button, message,
} from 'antd';
import { Trans, withTranslation } from 'react-i18next';
import { Landing, LandingPageInputs } from '../Style';

const { Title } = Typography;
const { Search } = Input;

class LandingPage extends React.Component {
	state = {
		loadingSearch: false,
		loadingButton: false,
	}

	onSearch = (val) => {
		const { history } = this.props;
		this.setState({
			loadingSearch: true,
		});
		history.push(`/forecast/${val}`);
	}

	currentLocation = () => {
		const { history } = this.props;
		this.setState({
			loadingButton: true,
		});
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				history.push(`/forecast/${position.coords.longitude}/${position.coords.latitude}`);
			}, (err) => {
				if (err) {
					message.warning('Could not get your location.');
					this.setState({
						loadingButton: false,
					});
				}
			});
		} else {
			message.warning('This browser does not support geolocation!');
			this.setState({
				loadingButton: false,
			});
		}
	}

	render() {
		const { t } = this.props;
		const { loadingSearch, loadingButton } = this.state;
		return (
			<Landing>
				<Title level={1}>
					<Trans>
						Get your forecast!
					</Trans>
				</Title>
				<LandingPageInputs>
					<Search
						placeholder={t('Inputcity')}
						enterButton={<Button type='primary' loading={loadingSearch}>Get forecast!</Button>}
						size='large'
						onSearch={(value) => this.onSearch(value)}
						style={{ marginRight: '10px' }}
					/>
					<Button
						icon='compass'
						type='primary'
						size='large'
						style={{ marginLeft: '30px' }}
						onClick={() => this.currentLocation()}
						loading={loadingButton}
					>
						Current location
					</Button>
				</LandingPageInputs>
			</Landing>
		);
	}
}

export default withTranslation()(LandingPage);
