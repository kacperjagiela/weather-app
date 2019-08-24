import * as React from 'react';
import { Typography, Input, Button } from 'antd';
import { useTranslation, Trans } from 'react-i18next';
import { Landing, LandingPageInputs } from '../Style';

const Error = ({ history }) => {
	const [loading, setLoading] = React.useState(false);
	const { t } = useTranslation();

	const onSearch = (val) => {
		setLoading(!loading);
		history.push(`/forecast/${val}`);
	};

	return (
		<Landing>
			<Typography.Title level={3}>
				<Trans>
					Oops.. could not find this city.
				</Trans>
			</Typography.Title>
			<Typography.Title level={3}>
				<Trans>
					Try again.
				</Trans>
			</Typography.Title>
			<LandingPageInputs>
				<Input.Search
					placeholder='Input city name...'
					enterButton={<Button type='primary' loading={loading}>{t('button')}</Button>}
					size='large'
					onSearch={(value) => onSearch(value)}
					style={{ marginRight: '10px' }}
				/>
			</LandingPageInputs>
		</Landing>
	);
};

export default Error;
