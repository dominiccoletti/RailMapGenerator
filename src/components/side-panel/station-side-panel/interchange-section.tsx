import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useAppSelector } from '../../../redux';
import EditableStack, { EditableField } from '../editable-stack';

export default function InterchangeSection() {
    const selectedStation = useAppSelector(state => state.app.selectedStation);
    const { transfer } = useAppSelector(state => state.param.stn_list[selectedStation]);

    const interchangeFields: EditableField[] = transfer.info.flat().map(it => ({
        type: 'custom',
        component: 'city-picker',
        label: 'City theme',
        value: it[0],
    }));

    return (
        <Flex>
            <EditableStack fields={interchangeFields} />
        </Flex>
    );
}
