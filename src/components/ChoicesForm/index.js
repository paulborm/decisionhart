import React, { useEffect, useState, useRef } from "react";
import Shell from "../../layout/Shell";
import Button from "../Button";
import Headline from "../Headline";
import ChoiceInput from "./ChoiceInput";
import ChoicesList from "./list";

import "./_ChoicesForm.scss";

export default function ChoicesForm({
        isVisible,
        choices,
        addChoice,
        removeChoice,
        confirm,
        abort
    }) {
    const baseName = "ChoicesForm";
    const inputRef = useRef(null);
    const [input, setInput] = useState("");

    useEffect(() => {
        if (!inputRef.current) return;
        inputRef.current.focus();
    }, [inputRef]);

    function onInputChange() {
        if (!inputRef.current) return;
        setInput(inputRef.current.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        if (input.trim().length <= 0) return;
        addChoice(input);
        setInput("");
    }

    if (!isVisible) return null;

    return (
        <div className={baseName}>
            <Shell>
                <Shell.Header>
                    <Headline size="h1">Was steht zur Auswahl?</Headline>
                </Shell.Header>
                <Shell.Body className={`${baseName}__body`}>
                    <ChoiceInput
                        value={input}
                        onSubmit={onFormSubmit}
                        onBlur={onFormSubmit}
                        onChange={onInputChange}
                        ref={inputRef}
                    />
                    <ChoicesList
                        items={choices}
                        remove={removeChoice}
                    />
                </Shell.Body>
                <Shell.Controls>
                    <Button
                        text
                        className={`${baseName}__controlItem`}
                        onClick={abort}
                    >
                        Abbrechen
                    </Button>
                    <Button
                        text={choices.length < 2}
                        disabled={choices.length < 2}
                        className={`${baseName}__controlItem`}
                        onClick={confirm}
                    >
                        Bestätigen
                    </Button>
                </Shell.Controls>
            </Shell>
        </div>
    )
}