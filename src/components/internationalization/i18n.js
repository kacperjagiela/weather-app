import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		// we init with resources
		resources: {
			'en-US': {
				translations: {
					'Get your forecast!': 'Get your weather forecast!',
					Inputcity: 'Input city name...',
					'Your location': 'Your location:',
					'Today will be': 'Today will be:',
					'Temperature for your location': 'Temperature for your location:',
					button: 'Check!',
					current: 'Current location',
					'Oops.. could not find this city.': 'Oops.. could not find this city.',
					'Try again.': 'Try again.',
					back: 'Back',
					Pressure: 'Pressure:',
					Clouds: 'Clouds:',
					Wind: 'Wind:',
					Humidity: 'Humidity:',
					tip: '(Try using english city names)',
					Sunday: 'Sunday',
					Monday: 'Monday',
					Tuesday: 'Tuesday',
					Wednesday: 'Wednesday',
					Thursday: 'Thursday',
					Friday: 'Friday',
					Saturday: 'Saturday',
					tooltip: 'Change the temperature scale',
				},
			},
			'pl-PL': {
				translations: {
					'Get your forecast!': 'Sprawdź prognozę pogody!',
					Inputcity: 'Wprowadź nazwę miasta...',
					'Your location': 'Twoja lokalizacja:',
					'Today will be': 'Dzisiaj będzie:',
					'Temperature for your location': 'Temperatura dla twojej lokalizacja to:',
					button: 'Sprawdź!',
					current: 'Bieżąca lokalizacja',
					'Oops.. could not find this city.': 'Ups... nie udało się znaleźć takiego miasta.',
					'Try again.': 'Spróbuj ponownie.',
					back: 'Cofnij',
					Pressure: 'Ciśnienie:',
					Clouds: 'Zachmurzenie:',
					Wind: 'Wiatr:',
					Humidity: 'Wilgotność:',
					tip: '(Spróbuj wpisac miasto używając angielskiej nazwy)',
					Sunday: 'Niedziela',
					Monday: 'Poniedziałek',
					Tuesday: 'Wtorek',
					Wednesday: 'Środa',
					Thursday: 'Czwartek',
					Friday: 'Piątek',
					Saturday: 'Sobota',
					tooltip: 'Zmień skalę pomiaru temperatury',
				},
			},
		},
		fallbackLng: 'en-US',
		debug: true,

		ns: ['translations'],
		defaultNS: 'translations',

		keySeparator: false,

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
