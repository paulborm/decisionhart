import React from "react";
import PropTypes from "prop-types";

import './_Button.scss';

const Button = ({ 
        className, 
        children, 
        disabled,
        text,
        as, 
        href, 
        value, 
        onClick 
    }) => {
    const baseName = "Button";
    const classNames = [
        baseName,
        className,
        disabled ? 'is-disabled' : '',
        text ? `${baseName}--text` : '',
    ];
    const Element = as;
    const buttonText = children || value;

    return (
        <Element
            //disabled={disabled}
            className={classNames.join(' ')}
            href={href}
            onClick={onClick}
        >
            {buttonText}
        </Element>
    );
}

Button.propTypes = {
    disabled: PropTypes.bool,
    as: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    disabled: false,
    as: "button",
}

export default Button;