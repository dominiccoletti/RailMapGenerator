import { PaletteEntry } from '../constants';

/**
 * Wikipedia: https://en.wikipedia.org/wiki/Harbin_Metro
 * Official website: http://www.harbin-metro.com/index.html
 * Data Source: http://bxt.harbin.gov.cn/hrb_bxt/disshow.php?id=772792
 */
const Harbin: PaletteEntry[] = [
    {
        id: 'hrb1',
        name: {
            en: 'Line 1',
            'zh-Hans': '1号线',
            'zh-Hant': '1號線',
        },
        colour: '#C8102E',
    },
    {
        id: 'hrb2',
        name: {
            en: 'Line 2',
            'zh-Hans': '2号线',
            'zh-Hant': '2號線',
        },
        colour: '#44AF52',
    },
    {
        id: 'hrb3',
        name: {
            en: 'Line 3',
            'zh-Hans': '3号线',
            'zh-Hant': '3號線',
        },
        colour: '#FFC72C',
    },
];

export default Harbin;
