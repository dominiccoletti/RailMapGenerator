import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ColourPicker from './colour-picker';
import { MonoColour, Theme } from '../../constants/constants';
import { CityCode } from '../../constants/city-config';

const mockTheme: Theme = [CityCode.Guangzhou, 'gz1', '#F3D03E', MonoColour.white];
const wrapper = mount(<ColourPicker defaultValue={mockTheme} />);

describe('Unit tests for ColourPicker component', () => {
    it('Can render picker button as expected', () => {
        const pickerBtn = wrapper.find('Button').at(0) as ReactWrapper<any>;

        expect(pickerBtn.text()).toBe('A');
        expect(pickerBtn.props().color).toBe(MonoColour.white);
        expect(pickerBtn.props().bg).toBe('#F3D03E');
    });
});
