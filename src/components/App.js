import React from 'react';
import {
	HashRouter, Switch, Route, withRouter,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LandingPage from './routes/LandingPage';
import Forecast from './routes/Forecast';
import CurrentLocationForecast from './routes/CurrentLocationForecast';
import Error from './routes/Error';
import LanguageSelect from './internationalization/LanguageSelect';

//  API 27b52f2d96109ac0a634c200d7092254

const App = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
	};

	return (
		<HashRouter basename='/'>
			<LanguageSelect changeLanguage={changeLanguage} defaultLanguage={i18n.language} />
			<Switch>
				<Route path='/forecast/:longitude/:latitude' exact component={withRouter(CurrentLocationForecast)} />
				<Route path='/forecast/:city' exact component={withRouter(Forecast)} />
				<Route path='/error' exact component={withRouter(Error)} />
				<Route path='/' component={withRouter(LandingPage)} />
			</Switch>
		</HashRouter>
	);
};

export default App;
