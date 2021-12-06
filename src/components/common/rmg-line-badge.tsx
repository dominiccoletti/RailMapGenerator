import React from 'react';
import { Name, Theme } from '../../constants/constants';
import { Badge } from '@chakra-ui/react';

interface RmgLineBadgeProps {
    name: Name;
    theme: Theme;
}

export default function RmgLineBadge(props: RmgLineBadgeProps) {
    const { name, theme } = props;

    return (
        <Badge color={theme[3]} bg={theme[2]}>
            {name[0].match(/^[\d\w]+/)?.[0] || name[0]}
        </Badge>
    );
}
