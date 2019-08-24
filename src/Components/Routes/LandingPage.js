import * as React from 'react';
import {
	Typography, Input, Button, message,
} from 'antd';
import styled from 'styled-components';
import { Trans, useTranslation } from 'react-i18next';
import { Landing, LandingPageInputs } from '../Style';

const { Title } = Typography;
const { Search } = Input;

const ResponsiveButton = styled(Button)`
	@media screen and (max-width:768px) {
		margin-top:15px;
	}
`;

const LandingPage = ({ history }) => {
	const [loadingSearch, setLoadingSearch] = React.useState(false);
	const [loadingButton, setLoadingButton] = React.useState(false);
	const { t } = useTranslation();

	const onSearch = (val) => {
		setLoadingSearch(true);
		history.push(`/forecast/${val}`);
	};

	const currentLocation = () => {
		setLoadingButton(true);
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				history.push(`/forecast/${position.coords.longitude}/${position.coords.latitude}`);
			}, (err) => {
				if (err) {
					message.warning('Could not get your location.');
					setLoadingButton(true);
				}
			});
		} else {
			message.warning('This browser does not support geolocation!');
			setLoadingButton(false);
		}
	};

	return (
		<Landing>
			<Title level={1}>
				<Trans>
					Get your forecast!
				</Trans>
			</Title>
			<LandingPageInputs style={{ width: '65%' }}>
				<Search
					placeholder={t('Inputcity')}
					enterButton={<Button type='primary' loading={loadingSearch}>{t('button')}</Button>}
					size='large'
					onSearch={(value) => onSearch(value)}
					style={{ marginRight: '10px' }}
				/>
				<ResponsiveButton
					icon='compass'
					type='primary'
					size='large'
					style={{ marginLeft: '30px' }}
					onClick={() => currentLocation()}
					loading={loadingButton}
				>
					{t('current')}
				</ResponsiveButton>
			</LandingPageInputs>
		</Landing>
	);
};

export default LandingPage;
