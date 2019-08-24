import * as React from 'react';
import { Typography, Input, Button } from 'antd';
import { Landing, LandingPageInputs } from '../Style';

const Error = ({ history }) => {
	const [loading, setLoading] = React.useState(false);

	const onSearch = (val) => {
		setLoading(!loading);
		history.push(`/forecast/${val}`);
	};

	return (
		<Landing>
			<Typography.Title level={3}>Oops.. could not find this city.</Typography.Title>
			<Typography.Title level={3}>Try again.</Typography.Title>
			<LandingPageInputs>
				<Input.Search
					placeholder='Input city name...'
					enterButton={<Button type='primary' loading={loading}>Get forecast!</Button>}
					size='large'
					onSearch={(value) => onSearch(value)}
					style={{ marginRight: '10px' }}
				/>
			</LandingPageInputs>
		</Landing>
	);
};

export default Error;
