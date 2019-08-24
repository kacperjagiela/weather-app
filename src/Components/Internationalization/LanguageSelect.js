import * as React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const LanguageSelect = ({ changeLanguage }) => (
	<Select defaultValue='en' onChange={(value) => changeLanguage(value)}>
		<Option value='en'>English</Option>
		<Option value='pl'>Polish</Option>
	</Select>
);

export default LanguageSelect;
