import React, { useEffect, useState, useRef } from "react";
import Shell from "../../layout/Shell";
import Button from "../Button";
import Headline from "../Headline";

import garbageIcon from "../../images/icon-garbage.svg";
import "./_ChoicesForm.scss";

export default function ChoicesForm({ 
        isVisible,
        choices, 
        addChoice,
        removeChoice,
        confirm,
        abort
    }) {
    
    if (!isVisible) return null;
    
    const baseName = "ChoicesForm";
    const inputRef = useRef(null);
    const listRef = useRef(null);
    const [input, setInput] = useState("");

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        //listRef.current.scrollIntoView(false);
        inputRef.current.focus();
    });

    function onInputChange() {
        setInput(inputRef.current.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        if (input.trim().length <= 0) return;
        addChoice(input);
        setInput("");
    }

    return (
        <div className={baseName}>
        <Shell>
            <Shell.Header>
                <Headline size="h1">Was steht zur Auswahl?</Headline>
            </Shell.Header>
            <Shell.Body className={`${baseName}__body`}>
                <ol className={`${baseName}__list`} ref={listRef}>
                    {
                        choices.map(choice => {
                            return (
                                <li className={`${baseName}__listItem`} key={choice.id}>
                                    <div className={`${baseName}__listItemContent`}>{choice.title}</div>
                                    <Button 
                                        text
                                        className={`${baseName}__listItemRemove`}
                                        onClick={() => removeChoice(choice.id)}
                                    >
                                       <img src={garbageIcon} alt="" />
                                    </Button>
                                </li>
                            );
                        })
                    }
                    <li className={`${baseName}__listItem ${baseName}__listItem--input`}>
                        <form className={`${baseName}__form`} onSubmit={onFormSubmit} onBlur={onFormSubmit}>
                            <div className={`${baseName}__input`}>
                                <input 
                                    type="text" 
                                    value={input} 
                                    placeholder="Möglichkeit hinzufügen..."
                                    ref={inputRef} 
                                    onChange={onInputChange} 
                                />
                            </div>
                        </form>
                    </li>
                </ol>
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