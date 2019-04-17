import React from "react";
import ChoiceItem from "./ChoiceItem";

export default function ChoicesList({
        items,
        remove
    }) {

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