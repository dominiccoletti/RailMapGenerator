import React from 'react';
import RmgLabel from '../common/rmg-label';
import RmgDebouncedInput from '../common/rmg-debounced-input';
import { Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';
import ColourPicker from './colour-picker';
import CityPicker from './city-picker';

type inputField = {
    type: 'input';
    label: string;
    value: string;
    placeholder?: string;
    onChange?: (val: string) => void;
};

type sliderField = {
    type: 'slider';
    label: string;
    value: number;
    min: number;
    max: number;
    onChange?: (val: number) => void;
};

type customField = {
    type: 'custom';
    component: string;
    label: string;
    value: any;
    onChange?: (val: any) => void;
};

export type EditableField = inputField | sliderField | customField;

interface EditableStackProps {
    fields: EditableField[];
}

export default function EditableStack(props: EditableStackProps) {
    const { fields } = props;

    return (
        <Flex wrap="wrap">
            {fields.map((field, i) => {
                switch (field.type) {
                    case 'input':
                        return (
                            <RmgLabel key={i} label={field.label} flex={1} minW={100}>
                                <RmgDebouncedInput
                                    placeholder={field.placeholder}
                                    defaultValue={field.value}
                                    onDebouncedChange={field.onChange}
                                />
                            </RmgLabel>
                        );
                    case 'slider':
                        return (
                            <RmgLabel key={i} label={field.label} flex={1} minW={180}>
                                <Slider
                                    defaultValue={field.value}
                                    min={field.min}
                                    max={field.max}
                                    onChangeEnd={field.onChange}
                                >
                                    <SliderTrack>
                                        <SliderFilledTrack />
                                    </SliderTrack>
                                    <SliderThumb />
                                </Slider>
                            </RmgLabel>
                        );
                    case 'custom':
                        if (field.component === 'city-picker') {
                            return (
                                <RmgLabel key={i} label={field.label} flex={1} minW={180}>
                                    <CityPicker defaultValueId={field.value} />
                                </RmgLabel>
                            );
                        } else if (field.component === 'colour-picker') {
                            return <ColourPicker defaultValue={field.value} />;
                        } else {
                            return <div />;
                        }
                    default:
                        return <div />;
                }
            })}
        </Flex>
    );
}
