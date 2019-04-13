import React from "react";
import ChoiceItem from "./ChoiceItem";

import './_list.scss';

export default function ChoicesList({
        items,
        remove
    }) {

    if (items.length <= 0) return null;

    const baseName = 'ChoicesList';

    return (
        <div className={baseName}>
            {
                items.map(item => {
                    return (
                        <ChoiceItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            remove={remove}
                        />
                    );
                })
            }
        </div>
    )
}