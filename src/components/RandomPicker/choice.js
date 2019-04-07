import React from "react";
import PropTypes from "prop-types";

export default function RandomPickerChoice({ choice }) {
    const content = choice.trim().length > 0 ? choice : '?';

    return (
        <div className="RandomPicker__choice">
            <span className="RandomPicker__choiceItem">{content}</span>
        </div>
    );
}

RandomPickerChoice.propTypes = {
    choice: PropTypes.string
};