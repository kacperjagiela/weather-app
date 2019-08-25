import * as React from 'react';
import { Icon } from 'antd';
import { useTranslation } from 'react-i18next';
import { BackButton } from './Style';

const Back = ({ history }) => {
	const { t } = useTranslation();

	const goBack = () => {
		history.push('/');
		return null;
	};

	return (
		<BackButton
			type="primary"
			onClick={() => goBack()}
		>
			<Icon type="left" />
			{t('back')}
		</BackButton>
	);
};

export default Back;
