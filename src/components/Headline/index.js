import React from "react";
import PropTypes from "prop-types";
import './_Headline.scss';

const Headline = ({ className, children, as, size }) => {
    const baseName = "sk-Headline";
    const classNames = [
        baseName,
        size ? `${baseName}--${size}` : null,
        className,
    ];
    const Element = as;

    return (
        <Element className={classNames.join(' ')}>
            {children}
        </Element>
    )
}

Headline.propTypes = {
    as: PropTypes.string,
    size: PropTypes.string,
}

Headline.defaultProps = {
    as: "div"
}

export default Headline
