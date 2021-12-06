import theme from './theme';
import { ColourHex } from '../constants/constants';

export const findNearestColour = (hex: ColourHex): string => {
    const colourDb: Record<string, Record<string, ColourHex> | ColourHex> = theme.colors;

    const [nearestColour] = Object.entries(colourDb).reduce(
        (acc, cur) => {
            if (cur[0].includes('Alpha') || cur[0] === 'current') {
                return acc;
            } else if (typeof cur[1] === 'string') {
                const dist = euclideanDistance(hex, cur[1]);
                return dist < acc[1] ? [cur[0], dist] : acc;
            } else {
                const dist = euclideanDistance(hex, cur[1]['600']);
                return dist < acc[1] ? [cur[0], dist] : acc;
            }
        },
        ['brand', Infinity]
    );
    return nearestColour;
};

const euclideanDistance = (hex1: ColourHex, hex2: ColourHex) => {
    return hexToRgb(hex1).reduce((acc, cur, idx) => {
        return acc + Math.pow(cur - hexToRgb(hex2)[idx], 2);
    }, 0);
};

const hexToRgb = (hex: ColourHex): [number, number, number] => {
    return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
};

export const fadeColour = (hex: ColourHex, value: number) => {
    return 'rgba(' + [...hexToRgb(hex), value].join(',') + ')';
};
