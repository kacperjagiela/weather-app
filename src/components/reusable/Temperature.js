import * as React from 'react';
import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { TemperatureButton } from './Style';

const Temperature = ({ temperature }) => {
	const [temp, setTemp] = React.useState(temperature);
	const [unit, setUnit] = React.useState('celsius');
	const { t } = useTranslation();

	const changeUnit = (temper) => {
		if (unit === 'celsius') {
			setTemp((temper * 1.8 + 32).toFixed(1));
			setUnit('fahrenheit');
		} else {
			setTemp(((temper - 32) / 1.8).toFixed(1));
			setUnit('celsius');
		}
	};

	return (
		<Tooltip title={t('tooltip')}>
			<TemperatureButton
				onKeyPress={() => changeUnit(temp)}
				onClick={() => changeUnit(temp)}
			>
				{temp}
				{
					unit === 'celsius' ? <>&#8451;</>
						: <>&#8457;</>
				}
			</TemperatureButton>
		</Tooltip>
	);
};

export default Temperature;
