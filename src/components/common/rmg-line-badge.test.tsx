import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import RmgLineBadge from './rmg-line-badge';
import { MonoColour } from '../../constants/constants';
import { CityCode } from '../../constants/city-config';

describe('Unit test for RmgLineBadge component', () => {
    it('Can render badge as expected', () => {
        const wrapper = mount(
            <RmgLineBadge
                name={['18号线', 'Line 18']}
                theme={[CityCode.Guangzhou, 'line', '#000000', MonoColour.white]}
            />
        );

        const badge = wrapper.find('Badge') as ReactWrapper<any>;
        expect(badge.text()).toBe('18');
        expect(badge.props().color).toBe(MonoColour.white);
        expect(badge.props().bg).toBe('#000000');
    });
});
