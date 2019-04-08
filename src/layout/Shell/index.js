import React from "react";

import "./_Shell.scss";


const baseName = "Shell";

export default class Shell extends React.Component {
    static Header = ({ children }) => <Header>{children}</Header>;
    static Body = ({ children }) => <Body>{children}</Body>;
    static Controls = ({ children }) => <Controls>{children}</Controls>;

    render() {
        return (
            <div className={baseName}>
                {this.props.children}
            </div>
        );
    }
}

function Header({ children }) {
    return (
        <div className={`${baseName}__header`}>
            {children}
        </div>
    );
}

function Body({ children }) {
    return (
        <div className={`${baseName}__body`}>
            {children}
        </div>
    );
}

function Controls({ children }) {
    return (
        <div className={`${baseName}__controls`}>
            {children}
        </div>
    );
}