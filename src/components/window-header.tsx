import React from 'react';
import { Flex, Heading, Badge, Box } from '@chakra-ui/react';
import { Environments, getEnvironment, getVersion } from '../util/config';

export default function WindowHeader() {
    const environment = getEnvironment();
    const getBadgeColour = (env: Environments) => {
        switch (env) {
            case Environments.DEV:
                return 'red';
            case Environments.UAT:
                return 'orange';
            case Environments.PRD:
                return 'green';
        }
    };

    return (
        <Flex p={1} align="center" justify="space-between">
            <Box ml={2}>
                <Heading as="h4" size="md">
                    Rail Map Generator
                    <Badge ml={1} colorScheme={getBadgeColour(environment)}>
                        {environment === Environments.PRD ? getVersion() : environment}
                    </Badge>
                </Heading>
            </Box>
        </Flex>
    );
}
