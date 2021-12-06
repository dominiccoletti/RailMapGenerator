import { Divider, Flex } from '@chakra-ui/react';
import React from 'react';
import EditableStack, { EditableField } from './editable-stack';
import { useAppSelector } from '../../redux';
import { useDispatch } from 'react-redux';
import {
    setBranchSpacing,
    setPaddingPercentage,
    setSvgHeight,
    setSvgWidth,
    setYPercentage,
} from '../../redux/param/action';
import { canvasConfig } from '../../constants/constants';

export default function StyleSidePanel() {
    const dispatch = useDispatch();

    const {
        style: rmgStyle,
        svgWidth,
        svg_height,
        y_pc,
        branch_spacing,
        padding,
    } = useAppSelector(state => state.param);

    const svgSizeFields: EditableField[] = [
        ...canvasConfig[rmgStyle].map<EditableField>(canvas => ({
            type: 'input',
            label: canvas + ' width',
            value: svgWidth[canvas].toString(),
            onChange: val => dispatch(setSvgWidth(Number(val), canvas)),
        })),
        {
            type: 'input',
            label: 'Canvas height',
            value: svg_height.toString(),
            onChange: val => dispatch(setSvgHeight(Number(val))),
        },
    ];

    const componentPositionFields: EditableField[] = [
        {
            type: 'slider',
            label: 'Vertical',
            value: y_pc,
            min: 0,
            max: 100,
            onChange: val => dispatch(setYPercentage(val)),
        },
        {
            type: 'slider',
            label: 'Branch spacing',
            value: branch_spacing,
            min: 0,
            max: 100,
            onChange: val => dispatch(setBranchSpacing(val)),
        },
        {
            type: 'slider',
            label: 'Rail map padding',
            value: padding,
            min: 0,
            max: 100,
            onChange: val => dispatch(setPaddingPercentage(val)),
        },
    ];

    return (
        <Flex direction="column" p={1}>
            <EditableStack fields={svgSizeFields} />

            <Divider />

            <EditableStack fields={componentPositionFields} />

            <Divider />

        </Flex>
    );
}
