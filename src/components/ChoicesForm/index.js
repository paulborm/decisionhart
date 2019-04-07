import React, { useEffect, useState, useRef } from "react";

export default function ChoicesForm({ 
        isVisible,
        choices, 
        addChoice,
        confirm,
        abort
    }) {
    
    if (!isVisible) return null;
    
    const inputEl = useRef(null);
    const [input, setInput] = useState("");

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
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
        <div>
            <ul>
                {
                    choices.map(choice => {
                        return (
                            <li key={choice.id}>{choice.title}</li>
                        );
                    })
                }
            </ul>
            <form onSubmit={onFormSubmit}>
                <input 
                    type="text" 
                    value={input} 
                    ref={inputEl} 
                    onChange={onInputChange} 
                />
            </form>
            <button onClick={confirm}>Bestätigen</button>
            <button onClick={abort}>Abbrechen</button>
        </div>
    )
}