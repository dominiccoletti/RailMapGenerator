import { PaletteEntry, MonoColour } from '../constants';

/**
 * Wikipedia: https://de.wikipedia.org/wiki/Stadtbahn_Dortmund
 * Official website: https://www.bus-und-bahn.de/download-center
 */
const Dortmund: PaletteEntry[] = [
    {
        id: 'du41',
        name: {
            en: 'U41',
            de: 'U41',
            'zh-Hans': '41号线',
            'zh-Hant': '41號線',
        },
        colour: '#FCDC00',
        fg: MonoColour.black,
    },
    {
        id: 'du42',
        name: {
            en: 'U42',
            de: 'U42',
            'zh-Hans': '42号线',
            'zh-Hant': '42號線',
        },
        colour: '#FBBA00',
    },
    {
        id: 'du43',
        name: {
            en: 'U43',
            de: 'U43',
            'zh-Hans': '43号线',
            'zh-Hant': '43號線',
        },
        colour: '#00A991',
    },
    {
        id: 'du44',
        name: {
            en: 'U44',
            de: 'U44',
            'zh-Hans': '44号线',
            'zh-Hant': '44號線',
        },
        colour: '#7FD2E6',
    },
    {
        id: 'du45',
        name: {
            en: 'U45',
            de: 'U45',
            'zh-Hans': '45号线',
            'zh-Hant': '45號線',
        },
        colour: '#DC2A1B',
    },
    {
        id: 'du46',
        name: {
            en: 'U46',
            de: 'U46',
            'zh-Hans': '46号线',
            'zh-Hant': '46號線',
        },
        colour: '#8874C7',
    },
    {
        id: 'du47',
        name: {
            en: 'U47',
            de: 'U47',
            'zh-Hans': '47号线',
            'zh-Hant': '47號線',
        },
        colour: '#A3D20B',
    },
    {
        id: 'du49',
        name: {
            en: 'U49',
            de: 'U49',
            'zh-Hans': '49号线',
            'zh-Hant': '49號線',
        },
        colour: '#FFBACD',
    },
    {
        id: 'duhb',
        name: {
            en: 'H-Bahn',
            de: 'H-Bahn',
            'zh-Hans': '空轨',
            'zh-Hant': '空軌',
        },
        colour: '#E00985',
    },
];

export default Dortmund;
