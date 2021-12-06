import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import RmgButtonGroup from './rmg-button-group';

const mockButtonFields = [
    {
        label: 'Mock Selected',
        selected: true,
    },
    {
        label: 'Mock Unselected',
    },
];

describe('Unit tests for RmgButtonGroup component', () => {
    it('Can render button group as expected', () => {
        const wrapper = mount(<RmgButtonGroup buttonList={mockButtonFields} />);

        // contains 2 buttons
        const buttons = wrapper.find('Button') as ReactWrapper<any>;
        expect(buttons).toHaveLength(2);

        // selected button
        const selectedBtn = buttons.at(0);
        expect(selectedBtn.text()).toBe('Mock Selected');
        expect(selectedBtn.props().variant).toBe('solid');

        // unselected button
        const unselectedBtn = buttons.at(1);
        expect(unselectedBtn.text()).toBe('Mock Unselected');
        expect(unselectedBtn.props().variant).toBe('outline');
    });
});
