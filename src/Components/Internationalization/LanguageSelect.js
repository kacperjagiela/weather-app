import * as React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const LanguageSelect = ({ changeLanguage, defaultLanguage }) => (
	<Select
		defaultValue={defaultLanguage}
		onChange={(value) => changeLanguage(value)}
		style={{ position: 'absolute', top: '5px', right: '10px' }}
	>
		<Option value='en'>English</Option>
		<Option value='pl'>Polish</Option>
	</Select>
);

export default LanguageSelect;
