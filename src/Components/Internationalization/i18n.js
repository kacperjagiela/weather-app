import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		// we init with resources
		resources: {
			en: {
				translations: {
					'Get your forecast!': 'Get your weather forecast!',
					Inputcity: 'Input city name...',
					'Your location': 'Your location:',
					'Today will be': 'Today will be:',
					'Temperature for your location': 'Temperature for your location',
					button: 'Check!',
					current: 'Current location',
					'Oops.. could not find this city.': 'Oops.. could not find this city.',
					'Try again.': 'Try again.',
					back: 'Back',
				},
			},
			pl: {
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
				},
			},
		},
		fallbackLng: 'en',
		debug: true,

		// have a common namespace used around the full app
		ns: ['translations'],
		defaultNS: 'translations',

		keySeparator: false, // we use content as keys

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
