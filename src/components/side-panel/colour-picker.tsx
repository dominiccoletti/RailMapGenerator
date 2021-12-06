import React, { useEffect, useState } from 'react';
import { Theme } from '../../constants/constants';
import { fadeColour } from '../../theme/util';
import {
    Button,
    ButtonGroup,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverFooter,
    PopoverTrigger,
} from '@chakra-ui/react';

interface ColourPickerProps {
    defaultValue: Theme;
    onChange?: (val: Theme) => void;
}

export default function ColourPicker(props: ColourPickerProps) {
    const { defaultValue, onChange } = props;

    const [background, setBackground] = useState(defaultValue[2]);
    const [foreground, setForeground] = useState(defaultValue[3]);

    useEffect(() => {
        setBackground(defaultValue[2]);
        setForeground(defaultValue[3]);
    }, [defaultValue.toString()]);

    return (
        <Popover>
            {({ onClose }) => (
                <>
                    <PopoverTrigger>
                        <Button
                            size="xs"
                            color={foreground}
                            bg={background}
                            _hover={{ bg: fadeColour(background, 0.9) }}
                        >
                            A
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                        <PopoverFooter d="flex" justifyContent="flex-end">
                            <ButtonGroup size="sm">
                                <Button variant="outline" onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme="red">Save</Button>
                            </ButtonGroup>
                        </PopoverFooter>
                    </PopoverContent>
                </>
            )}
        </Popover>
    );
}
