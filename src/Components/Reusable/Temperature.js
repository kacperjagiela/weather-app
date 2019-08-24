import * as React from 'react';
import { Button } from 'antd';

const Temperature = ({ temperature }) => {
	const [temp, setTemp] = React.useState(temperature);
	const [unit, setUnit] = React.useState('celsius');

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
		<Button
			onKeyPress={() => changeUnit(temp)}
			onClick={() => changeUnit(temp)}
			style={{
				cursor: 'pointer',
				marginTop: '5px',
			}}
		>
			{temp}
			{
				unit === 'celsius' ? <>&#8451;</>
					: <>&#8457;</>
			}
		</Button>
	);
};

export default Temperature;
