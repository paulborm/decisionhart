import React, { useEffect, useState, useRef } from "react";
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
    const inputEl = useRef(null);
    const listEl = useRef(null);
    const [input, setInput] = useState("");

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        listEl.current.scrollIntoView(false);
        inputEl.current.focus();
    });

    function onInputChange() {
        setInput(inputEl.current.value);
    }

    function onFormSubmit(event) {
        event.preventDefault();
        if (input.trim().length <= 0) return;
        addChoice(input);
        setInput("");
    }

    return (
        <div className={baseName}>
            <div className={`${baseName}__header`}>
                <Headline size="h1">Was steht zur Auswahl?</Headline>
            </div>
            <div className={`${baseName}__body`}>
                <ol className={`${baseName}__list`} ref={listEl}>
                    {
                        choices.map(choice => {
                            return (
                                <li className={`${baseName}__listItem`} key={choice.id}>
                                    <div className={`${baseName}__listItemContent`}>{choice.title}</div>
                                    <button 
                                        className={`${baseName}__listItemRemove`}
                                        onClick={() => removeChoice(choice.id)}
                                    >
                                       <img src={garbageIcon} alt="" />
                                    </button>
                                </li>
                            );
                        })
                    }
                    <li className={`${baseName}__listItem ${baseName}__listItem--input`}>
                        <form className={`${baseName}__form`} onSubmit={onFormSubmit}>
                            <div className={`${baseName}__input`}>
                                <input 
                                    type="text" 
                                    value={input} 
                                    placeholder="Möglichkeit hinzufügen..."
                                    ref={inputEl} 
                                    onChange={onInputChange} 
                                />
                            </div>
                        </form>
                    </li>
                </ol>
            </div>
            <div className={`${baseName}__controls`}>
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
            </div>
        </div>
    )
}