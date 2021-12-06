import React from 'react';
import RmgAutoComplete from '../common/rmg-auto-complete';
import { CityCode, CityEntry, cityList } from '../../constants/city-config';
import { LanguageCode } from '../../constants/constants';

const getFlagEmojiCodePoints = (countryCode: string): string[] | undefined => {
    // TODO: for Chinese mainland users
    if (countryCode.toUpperCase() === 'TW') {
        // return ['1F3F4'];
    }

    const chars = countryCode.toUpperCase().split('');
    if (chars.length === 2) {
        // normal country
        return chars.map(char => ((char.codePointAt(0) || 0) + 0x1f1a5).toString(16).toUpperCase());
    } else if (chars.length === 5) {
        // GBENG, GBSCT
        return [
            '1F3F4',
            ...chars.map(char => ((char.codePointAt(0) || 0) + 0xe0020).toString(16).toUpperCase()),
            'E007F',
        ];
    }
};

interface CityPickerProps {
    defaultValueId: CityCode;
    onChange?: (val: CityCode) => void;
}

export default function CityPicker(props: CityPickerProps) {
    const { defaultValueId, onChange } = props;

    const data = cityList;
    const currentItem = data.find(item => item.id === defaultValueId);

    const displayValue = (item: CityEntry) => {
        const flagEmojiCodePoints = getFlagEmojiCodePoints(item.country);
        const flagEmoji = String.fromCodePoint(...(flagEmojiCodePoints?.map(cp => parseInt(cp, 16)) || []));

        return flagEmoji + ' ' + item.name[LanguageCode.English];
    };

    return (
        <RmgAutoComplete
            data={data}
            displayValue={displayValue}
            displayHandler={displayValue}
            predicate={(item, input) => item.name.en?.includes(input) || false}
            defaultValue={currentItem ? displayValue(currentItem) : undefined}
            onChange={item => onChange?.(item.id)}
        />
    );
}
