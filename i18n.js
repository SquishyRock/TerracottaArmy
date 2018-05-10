import i18n from 'i18next';
import { DangerZone } from 'expo';
const { Localization } = DangerZone;

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector

const languageDetector = {
  type: 'languageDetector',
  async: true, // async detection
  detect: (cb) => {
    return Localization.getCurrentLocaleAsync()
      .then(lng => { cb(lng); })
  },
  init: () => { },
  cacheUserLanguage: () => { }
}
i18n
  .use(languageDetector)
  .init({
    fallbackLng: 'en',
    // the translations
    // realworld load that via xhr or bundle those using webpack    
    resources: {
      en: {
        home: {
          title: 'Welcome'
        }
      },
      il: {
        home: {
          title: 'Italian Welcome'
        }
      },
      // have a initial namespace
      ns: ['translation'],
      defaultNS: 'translation',
      interpolation: {
        escapeValue: false // not needed for react
      }
    }
  });
  
export default i18n;