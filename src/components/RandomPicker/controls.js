import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

export default function RandomPickerControls({
        isRunning,
        isFinished,
        start,
        stop
    }) {

    if (isFinished) return null;
    
    return (
        <div className="RandomPicker__controls">
            <Button
                className={`RandomPicker__button ${isRunning && 'RandomPicker__button--stop'}`}
                onClick={isRunning ? stop : start}
            >
                {isRunning ? 'stop' : 'start'}
            </Button>
        </div>
    );
}

RandomPickerControls.propTypes = {
    isRunning: PropTypes.bool,
    hasChoice: PropTypes.bool,
    start: PropTypes.func,
    stop: PropTypes.func
};