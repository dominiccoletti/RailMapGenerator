import {
    Box,
    Button,
    Flex,
    Popover,
    PopoverAnchor,
    PopoverBody,
    PopoverContent,
    useOutsideClick,
} from '@chakra-ui/react';
import React, { ReactElement, useRef, useState } from 'react';
import RmgDebouncedInput from './rmg-debounced-input';

interface RmgAutoCompleteProps<T> {
    data: T[];
    displayValue: (item: T) => string;
    displayHandler?: (item: T) => ReactElement | string | number;
    predicate: (item: T, input: string) => boolean;
    defaultValue?: string;
    onChange?: (item: T) => void;
}

export default function RmgAutoComplete<T extends { id: string }>(props: RmgAutoCompleteProps<T>) {
    const { data, displayValue, displayHandler, predicate, defaultValue, onChange } = props;

    const wrapperRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState(defaultValue || '');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useOutsideClick({ ref: wrapperRef, handler: () => setIsDropdownOpen(false) });

    const handleSelect = (item: T) => {
        setInputValue(displayValue(item));
        setIsDropdownOpen(false);
        onChange?.(item);
    };

    return (
        <Box ref={wrapperRef}>
            <Popover placement="bottom-start" isOpen={isDropdownOpen} autoFocus={false}>
                <PopoverAnchor>
                    <RmgDebouncedInput
                        defaultValue={inputValue}
                        onDebouncedChange={val => setInputValue(val)}
                        onFocus={() => setIsDropdownOpen(true)}
                    />
                </PopoverAnchor>

                <PopoverContent w="unset">
                    <PopoverBody p={0}>
                        <Flex direction="column" maxH={270} overflowY="auto">
                            {data
                                .filter(item => predicate(item, inputValue))
                                .map(item => (
                                    <Button
                                        key={item.id}
                                        size="sm"
                                        variant="ghost"
                                        justifyContent="flex-start"
                                        flexShrink={0}
                                        role="menuitem"
                                        onClick={() => handleSelect(item)}
                                    >
                                        {displayHandler ? displayHandler(item) : displayValue(item)}
                                    </Button>
                                ))}
                        </Flex>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
}
