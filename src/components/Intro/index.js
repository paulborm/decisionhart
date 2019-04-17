import React, { useEffect, useState } from "react";
import Button from "../Button";
import Headline from "../Headline";
import Shell from "../../layout/Shell";

import './_Intro.scss';

export default function Intro({ toggleForm }) {
    const baseName = "Intro";
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const greetings = [
            "Na, schwere Entscheidung?",
            "Kannst du dich nicht entscheiden?",
            "Hilfe Gefällig?",
            "Keine Antwort parat?",
            "Da braucht wohl jemand eine Entscheidung.",
            "Eine Antwort zum mitnehmen? Kommt sofort!",
            "Was gibt es schöneres als eine Entscheidung?",
            "Entscheidung gefällig?",
            "Frische Entscheidungen zum mitnehmen.",
            "Ratlos in Seattle.",
            "Lieber entscheiden, als leiden.",
        ];
        const pickedChoice = greetings[Math.floor(Math.random() * greetings.length)];
        setGreeting(pickedChoice);
    }, []);

    return (
        <div className={baseName}>
            <Shell>
                <Shell.Body className={`${baseName}__body`}>
                    <Headline
                        className={`${baseName}__title`}
                        size="h1"
                    >
                        {greeting}
                    </Headline>
                    <Button
                        onClick={toggleForm}
                        value="Hilfe!!!"
                    />
                </Shell.Body>
            </Shell>
        </div>
    )
}