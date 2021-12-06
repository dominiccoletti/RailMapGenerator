import React, { MouseEventHandler } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';

type ButtonGroupButtonField = {
    label: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    selected?: boolean;
};

interface RmgButtonGroupProps {
    buttonList: ButtonGroupButtonField[];
}

export default function RmgButtonGroup(props: RmgButtonGroupProps) {
    const { buttonList } = props;

    return (
        <ButtonGroup size="xs" isAttached colorScheme="teal">
            {buttonList.map(button => (
                <Button key={button.label} variant={button.selected ? 'solid' : 'outline'} onClick={button.onClick}>
                    {button.label}
                </Button>
            ))}
        </ButtonGroup>
    );
}
