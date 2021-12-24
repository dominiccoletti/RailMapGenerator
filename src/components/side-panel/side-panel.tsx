import React from 'react';
import { useAppSelector } from '../../redux';
import { setSidePanelMode } from '../../redux/app/action';
import { useDispatch } from 'react-redux';
import { Alert, AlertIcon, Box, CloseButton, Flex } from '@chakra-ui/react';
import { SidePanelMode } from '../../constants/constants';
import StationSidePanel from './station-side-panel/station-side-panel';
import StyleSidePanel from './style-side-panel';

export default function SidePanel() {
    const dispatch = useDispatch();

    const { sidePanelMode, selectedStation } = useAppSelector(state => state.app);
    const { name } = useAppSelector(state => state.param.stn_list[selectedStation]);

    const handleClose = () => {
        dispatch(setSidePanelMode(SidePanelMode.CLOSE));
    };

    return (
        <Flex
            as="section"
            height="100%"
            maxW={sidePanelMode !== SidePanelMode.CLOSE ? 360 : 0}
            visibility={sidePanelMode !== SidePanelMode.CLOSE ? 'initial' : 'hidden'}
            position="relative"
            boxShadow="xl"
            shrink={0}
            direction="column"
            transition="0.3s"
        >
            <Box w={360}>
                <Alert status="info" variant="solid" size="xs" pl={3} pr={1} pb={0} pt={0}>
                    <AlertIcon />
                    {sidePanelMode === SidePanelMode.STATION ? name[0] + ' - ' + name[1] : 'Edit style'}
                    <CloseButton ml="auto" onClick={handleClose} />
                </Alert>

                {sidePanelMode === SidePanelMode.STATION && <StationSidePanel />}
                {sidePanelMode === SidePanelMode.STYLE && <StyleSidePanel />}
            </Box>
        </Flex>
    );
}
