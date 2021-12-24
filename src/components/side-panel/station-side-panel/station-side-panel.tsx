import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import InfoSection from './info-section';
import InterchangeSection from './interchange-section';
import MoreSection from './more-section';

type SidePanelSection = {
    title: string;
    children: ReactNode;
};

export default function StationSidePanel() {
    const sidePanelFields: SidePanelSection[] = [
        { title: 'Basic info', children: <InfoSection /> },
        { title: 'Interchange', children: <InterchangeSection /> },
        { title: 'More', children: <MoreSection /> },
    ];

    return (
        <Accordion allowMultiple allowToggle>
            {sidePanelFields.map((field, i) => (
                <AccordionItem key={i}>
                    <h2>
                        <AccordionButton size="xs">
                            <Box flex="1" textAlign="left">
                                {field.title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel p={1}>{field.children}</AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
