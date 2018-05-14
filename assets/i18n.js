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
          audioButton: 'AUDIO GUIDES',
          panelsButton: 'DESCRIPTION PANELS',
          infoButton: 'EXHIBIT INFORMATION',
          file: require("../assets/images/terracotta-title.png"),
        },
        audio: {
          title: 'AUDIO GUIDE',
          loading: 'Loading...',
          buffering: 'Buffering...',
          searchFill: 'Enter Number',
        },
        panels: {
          title: 'SEARCH PANELS',
          objPanel: 'Object Panel',
          galPanel: 'Gallery Panel',
          searchFill: 'Enter Number',
        },
        info: {
          title1: 'EXHIBIT',
          title2: 'INFO',
          website: 'VISIT THE WEBSITE',
          info1: 'The Terracotta Army and The First Emperor of China; The Exhibition is an extraordinary voyage in Ancient China of 2,200 years ago. It is the most complete exhibition ever created on the Terracotta Army, the necropolis and life of the First Emperor. In an incredible staging, this exhibition brings together more than 300 life size reproductions of statues, chariots, weapons and objects from the daily life of the Emperor Qin Shi Huangdi, such as they were discovered in the pits.',
          info2: 'This immersion in the heart of the necropolis is intended for a broad audience. Over more than 1,800 m², the exhibition addresses numerous topics such as the history of the First Emperor, his army and military conquests, his empire and the creation process of the Terracotta Army soldiers.',
          location: 'WE ARE LOCATED:',
          direction: 'Directions',
          facebook: 'Visit us on Facebook',
          file: require("../assets/images/terracotta-title.png"),
        },
        tabs: {
          home: 'Home',
          audio: 'Audio',
          panels: 'Panels',
          info: 'Info',
        },
      },
      il: {
        home: {
          audioButton: 'AUDIO GUIDES - IL',
          panelsButton: 'DESCRIPTION PANELS - IL',
          infoButton: 'EXHIBIT INFORMATION - IL',
          file: require("../assets/images/terracotta-title.png"),
        },
        audio: {
          title: 'AUDIO GUIDE - IL',
          loading: 'Loading... - IL',
          buffering: 'Buffering... - IL',
          searchFill: 'Enter Number - IL',
        },
        panels: {
          title: 'SEARCH PANELS - IL',
          objPanel: 'Object Panel - IL',
          galPanel: 'Gallery Panel - IL',
          searchFill: 'Enter Number - IL',
        },
        info: {
          title1: 'EXHIBIT - IL',
          title2: 'INFO - IL',
          website: 'VISIT THE WEBSITE - IL',
          info1: 'The Terracotta Army and The First Emperor of China; The Exhibition is an extraordinary voyage in Ancient China of 2,200 years ago. It is the most complete exhibition ever created on the Terracotta Army, the necropolis and life of the First Emperor. In an incredible staging, this exhibition brings together more than 300 life size reproductions of statues, chariots, weapons and objects from the daily life of the Emperor Qin Shi Huangdi, such as they were discovered in the pits.',
          info2: 'This immersion in the heart of the necropolis is intended for a broad audience. Over more than 1,800 m², the exhibition addresses numerous topics such as the history of the First Emperor, his army and military conquests, his empire and the creation process of the Terracotta Army soldiers.',
          location: 'WE ARE LOCATED: - IL',
          direction: 'Directions - IL',
          facebook: 'Visit us on Facebook - IL',
          file: require("../assets/images/terracotta-title.png"),
        },
        tabs: {
          home: 'Home IL',
          audio: 'Audio IL',
          panels: 'Panels IL',
          info: 'Info IL',
        },
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