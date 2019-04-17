import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./_Shell.scss";


const baseName = "Shell";

export default class Shell extends React.Component {
    static Header = (props) => <Header {...props} />;
    static Body = (props) => <Body {...props} />;
    static Controls = (props) => <Controls {...props} />;

    constructor() {
        super();
        this.transitionDuration = 800;
    }

    componentDidMount() {
        this.compRef.style.setProperty('--transitionDuration', this.transitionDuration);
    }

    render() {
        return (
            <div className={baseName} ref={el => this.compRef = el}>
                <TransitionGroup component={null}>
                    {
                        React.Children.map(this.props.children, (child, index) =>
                            <CSSTransition
                                key={index}
                                appear={true}
                                timeout={this.transitionDuration}
                                classNames={baseName}
                            >
                                {
                                    React.cloneElement(child, {
                                        style: { transitionDelay: `${index * 200}ms` }
                                    })
                                }
                            </CSSTransition>
                        )
                    }

                </TransitionGroup>
            </div>
        );
    }
}

function Header({ style, children }) {
    return (
        <div className={`${baseName}__header`} style={style}>
            {children}
        </div>
    );
}

function Body({ style, className, children }) {
    const classNames = [
        `${baseName}__body`,
        className,
    ];
    return (
        <div className={classNames.join(' ')} style={style}>
            {children}
        </div>
    );
}

function Controls({ style, children }) {
    return (
        <div className={`${baseName}__controls`} style={style}>
            {children}
        </div>
    );
}