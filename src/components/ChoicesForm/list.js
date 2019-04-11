import React from "react";
import Button from "../Button";

import garbageIcon from "../../images/icon-garbage.svg";

export default function ChoicesList({
        baseName,
        items,
        remove
    }) {

    if (items.length <= 0) return null;

    return (
        <ol className={`${baseName}__list`}>
            {
                items.map(item => {
                    return (
                        <li className={`${baseName}__listItem`} key={item.id}>
                            <div className={`${baseName}__listItemContent`}>{item.title}</div>
                            <Button
                                text
                                className={`${baseName}__listItemRemove`}
                                onClick={() => remove(item.id)}
                            >
                                <img src={garbageIcon} alt="" />
                            </Button>
                        </li>
                    );
                })
            }
        </ol>
    )
}