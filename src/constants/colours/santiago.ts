import { PaletteEntry, MonoColour } from '../constants';

/**
 * Wikipedia: https://en.wikipedia.org/wiki/Santiago_Metro
 * Official website: https://www.metro.cl/
 */
const Santiago: PaletteEntry[] = [
    {
        id: 'stg1',
        name: {
            en: 'Line 1',
            es: 'Línea 1',
            'zh-Hans': '1号线',
            'zh-Hant': '1號線',
        },
        colour: '#DC1A32',
    },
    {
        id: 'stg2',
        name: {
            en: 'Line 2',
            es: 'Línea 2',
            'zh-Hans': '2号线',
            'zh-Hant': '2號線',
        },
        colour: '#FBB416',
        fg: MonoColour.black,
    },
    {
        id: 'stg3',
        name: {
            en: 'Line 3',
            es: 'Línea 3',
            'zh-Hans': '3号线',
            'zh-Hant': '3號線',
        },
        colour: '#65250F',
    },
    {
        id: 'stg4',
        name: {
            en: 'Line 4',
            es: 'Línea 4',
            'zh-Hans': '4号线',
            'zh-Hant': '4號線',
        },
        colour: '#212580',
    },
    {
        id: 'stg4a',
        name: {
            en: 'Line 4A',
            es: 'Línea 4A',
            'zh-Hans': '4号线支线',
            'zh-Hant': '4號線支線',
        },
        colour: '#0076BE',
    },
    {
        id: 'stg5',
        name: {
            en: 'Line 5',
            es: 'Línea 5',
            'zh-Hans': '5号线',
            'zh-Hant': '5號線',
        },
        colour: '#0B9444',
    },
    {
        id: 'stg6',
        name: {
            en: 'Line 6',
            es: 'Línea 6',
            'zh-Hans': '6号线',
            'zh-Hant': '6號線',
        },
        colour: '#943B92',
    },
    {
        id: 'stg7',
        name: {
            en: 'Line 7',
            es: 'Línea 7',
            'zh-Hans': '7号线',
            'zh-Hant': '7號線',
        },
        colour: '#6C6D70',
    },
    {
        id: 'stg8',
        name: {
            en: 'Line 8',
            es: 'Línea 8',
            'zh-Hans': '8号线',
            'zh-Hant': '8號線',
        },
        colour: '#EA662D',
    },
    {
        id: 'stg9',
        name: {
            en: 'Line 9',
            es: 'Línea 9',
            'zh-Hans': '9号线',
            'zh-Hant': '9號線',
        },
        colour: '#E66AA6',
    },
];

export default Santiago;
