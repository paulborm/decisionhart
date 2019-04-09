import React from "react";
import PropTypes from "prop-types";

export default function RandomPickerChoice({ isRunning, choice }) {
    const content = choice.trim().length > 0 ? choice : '?';

    if (isRunning) return null;

    return (
        <div className="RandomPicker__choice">
            <span className="RandomPicker__choiceItem">{content}</span>
        </div>
    );
}

RandomPickerChoice.propTypes = {
    choice: PropTypes.string
};