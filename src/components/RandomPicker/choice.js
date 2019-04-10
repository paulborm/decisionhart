import React from "react";
import PropTypes from "prop-types";
import Headline from "../Headline";

export default function RandomPickerChoice({ choice }) {
    const content = choice.trim().length > 0 ? choice : '?';

    return (
        <div className="RandomPicker__choice">
            <Headline size="h1">{content}</Headline>
        </div>
    );
}

RandomPickerChoice.propTypes = {
    choice: PropTypes.string
};