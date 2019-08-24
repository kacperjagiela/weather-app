import * as React from 'react';

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
		<span
			role='button'
			tabIndex={0}
			onKeyPress={() => changeUnit(temp)}
			onClick={() => changeUnit(temp)}
			style={{
				cursor: 'pointer',
				textDecoration: 'underline',
			}}
		>
			{temp}
			{
				unit === 'celsius' ? <>&#8451;</>
					: <>&#8457;</>
			}
		</span>
	);
};

export default Temperature;
