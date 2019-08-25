import * as React from 'react';
import { Button, Icon } from 'antd';
import { useTranslation } from 'react-i18next';

const Back = ({ history }) => {
	const { t } = useTranslation();

	const goBack = () => {
		history.push('/');
		return null;
	};

	return (
		<Button
			type="primary"
			onClick={() => goBack()}
			style={{
				position: 'absolute',
				top: '20px',
				left: '40px',
				width: '90px',
			}}
		>
			<Icon type="left" />
			{t('back')}
		</Button>
	);
};

export default Back;
