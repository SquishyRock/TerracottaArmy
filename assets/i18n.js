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
      },
      il: {
        home: {
          audioButton: 'AUDIOGUIDE',
          panelsButton: 'PANNELLI DESCRITTIVI',
          infoButton: 'INFORMAZIONI SULLA MOSTRA',
          file: require("../assets/images/terracotta-title-il.png"),
        },
        audio: {
          title: 'AUDIOGUIDA',
          loading: 'Caricamento...',
          buffering: 'Buffering...',
          searchFill: 'Inserire Numero',
        },
        panels: {
          title: 'PANNELLI DI RICERCA',
          objPanel: 'PANNELLO DEGLI OGGETTI',
          galPanel: 'PANNELLO GALLERIA',
          searchFill: 'Inserire Numero',
        },
        info: {
          title1: 'MOSTRA',
          title2: 'INFORMAZIONI',
          website: 'VISITA IL SITO WEB',
          info1: 'L\'esercito di terracotta e il Primo Imperatore della Cina; L\'Esposizione è un viaggio straordinario nell\'antica Cina di 2.200 anni fa. È la mostra più completa mai realizzata sull\'esercito di terracotta, la necropoli e la vita del Primo Imperatore. In un incredibile allestimento, questa mostra riunisce oltre 300 riproduzioni a grandezza naturale di statue, carri, armi e oggetti della vita quotidiana dell\'imperatore Qin Shi Huangdi, così come rinvenuti nelle fosse.',
          info2: 'Questa immersione nel cuore della necropoli si rivolge a un vasto pubblico. Su oltre 1.800 m², la mostra affronta numerosi argomenti come la storia del Primo Imperatore, il suo esercito e le conquiste militari, il suo impero e il processo di creazione dei soldati dell\'esercito di terracotta.',
          location: 'DOVE CI TROVIAMO',
          direction: 'INDICAZIONI',
          facebook: 'VIENI A TROVARCI SU FACEBOOK',
          file: require("../assets/images/terracotta-title-il.png"),
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