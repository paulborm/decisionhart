import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

export default function RandomPickerControls({
        isRunning,
        isFinished,
        status,
        start,
        stop,
        reset,
        toggleForm,
    }) {
    
    return (
        <React.Fragment>
            {
                status && status.trim().toLowerCase() === 'finished'
                    ?
                    <Button 
                        className={`RandomPicker__button`} 
                        onClick={reset}
                    >
                        Okay
                    </Button>
                    :
                    <React.Fragment>
                        <Button 
                            text 
                            className={`RandomPicker__button`} 
                            onClick={toggleForm}
                        >
                            Möglichkeiten bearbeiten
                        </Button>
                        <Button
                            className={`RandomPicker__button ${isRunning && 'RandomPicker__button--stop'}`}
                            onClick={isRunning ? stop : start}
                        >
                            {isRunning ? 'stop' : 'start'}
                        </Button>
                    </React.Fragment>
            }
        </React.Fragment>
    );
}

RandomPickerControls.propTypes = {
    isRunning: PropTypes.bool,
    hasChoice: PropTypes.bool,
    start: PropTypes.func,
    stop: PropTypes.func
};