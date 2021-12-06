import React from 'react';
import { Flex } from '@chakra-ui/react';
import CanvasButtonGroup from './canvas-button-group';
import HeaderActions from './header-actions';

export default function PageHeader() {
    return (
        <Flex align="center" wrap="wrap" pl={2} pr={3}>
            <CanvasButtonGroup />
            <HeaderActions />
        </Flex>
    );
}
