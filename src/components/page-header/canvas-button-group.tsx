import React from 'react';
import RmgButtonGroup from '../common/rmg-button-group';
import { useAppSelector } from '../../redux';
import { AllCanvas, canvasConfig, CanvasType } from '../../constants/constants';
import { useDispatch } from 'react-redux';
import { selectCanvas } from '../../redux/app/action';
import RmgLabel from '../common/rmg-label';

export default function CanvasButtonGroup() {
    const dispatch = useDispatch();

    const canvasToShow = useAppSelector(state => state.app.canvasToShow);
    const style = useAppSelector(state => state.param.style);

    const buttonList = [AllCanvas, ...canvasConfig[style]].map(canvas => ({
        label: canvas,
        onClick: () => dispatch(selectCanvas(canvas as CanvasType | typeof AllCanvas)),
        selected: canvas === canvasToShow,
    }));

    return (
        <RmgLabel label="Canvas to show">
            <RmgButtonGroup buttonList={buttonList} />
        </RmgLabel>
    );
}
