import React from 'react';
import { HStack, Button } from '@chakra-ui/react';
import DownloadActions from './download-actions';
import { MdPalette } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { SidePanelMode } from '../../constants/constants';
import { setSidePanelMode } from '../../redux/app/action';

export default function HeaderActions() {
    const dispatch = useDispatch();

    return (
        <HStack ml="auto">
            <DownloadActions />
            <Button variant="ghost" size="sm">
                Upload
            </Button>
            <Button
                variant="solid"
                size="sm"
                colorScheme="teal"
                leftIcon={<MdPalette />}
                onClick={() => dispatch(setSidePanelMode(SidePanelMode.STYLE))}
            >
                Edit style
            </Button>
        </HStack>
    );
}
