import React from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ChoiceItem from "./ChoiceItem";

import './_list.scss';

export default function ChoicesList({
        items,
        remove
    }) {

    const baseName = 'ChoicesList';

    return (
        <div className={baseName}>
            <TransitionGroup>
                {
                    items.map(item => {
                        return (
                            <CSSTransition
                                key={item.id}
                                timeout={250}
                                classNames={`${baseName}__item`}
                            >
                                <div className={`${baseName}__item`}>
                                    <ChoiceItem
                                        id={item.id}
                                        title={item.title}
                                        remove={remove}
                                    />
                                </div>
                            </CSSTransition>
                        );
                    })
                }
            </TransitionGroup>
        </div>
    )
}