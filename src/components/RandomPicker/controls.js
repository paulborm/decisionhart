import React from "react";
import PropTypes from "prop-types";

export default function RandomPickerControls({
        isRunning,
        isFinished,
        start,
        stop
    }) {

    if (isFinished) return null;
    
    return (
        <div className="RandomPicker__controls">
            <button
                className={`RandomPicker__button ${isRunning && 'RandomPicker__button--stop'}`}
                onClick={isRunning ? stop : start}
            >
                {isRunning ? 'stop' : 'start'}
            </button>
        </div>
    );
}

RandomPickerControls.propTypes = {
    isRunning: PropTypes.bool,
    hasChoice: PropTypes.bool,
    start: PropTypes.func,
    stop: PropTypes.func
};