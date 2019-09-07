import React from "react";
import Button from "../Button";

import GarbageIcon from "../../images/svg/icon-garbage.svg";
import './_ChoiceItem.scss';

export default function ChoiceItem({
        id,
        title,
        remove
    }) {

    const baseName = "ChoiceItem";
    const classNames = [
        baseName,
    ];

    return (
        <div className={classNames.join(' ')}>
            <div className={`${baseName}__title`}>{title}</div>
            <Button
                text
                className={`${baseName}__remove`}
                onClick={() => remove(id)}
            >
                <GarbageIcon />
            </Button>
        </div>
    )
}