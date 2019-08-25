import * as React from 'react';
import { Select } from 'antd';
import LangSelect from './Style';

const { Option } = Select;

const LanguageSelect = ({ changeLanguage, defaultLanguage }) => (
	<LangSelect
		defaultValue={defaultLanguage}
		onChange={(value) => changeLanguage(value)}
	>
		<Option value='en-US'>en-US</Option>
		<Option value='pl-PL'>pl-PL</Option>
	</LangSelect>
);

export default LanguageSelect;
