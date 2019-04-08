import React, { useState } from "react";
import _ from "lodash";
import RandomPicker from "../components/RandomPicker";
import ChoicesForm from "../components/ChoicesForm";
import Intro from "../components/Intro";
import Button from "../components/Button";

export default function IndexPage() {
    const [choices, setChoices] = useState([]);
    const [localChoices, setLocalChoices] = useState([]);
    const [isFormVisible, setFormVisibility] = useState(false);
    const [pickerStatus, setPickerStatus] = useState(null);

    function addLocalChoice(choice) {
        const newChoices = [
            ...localChoices,
            {
                id: _.uniqueId(),
                title: choice
            }
        ];
        setLocalChoices(newChoices);
    };

    function removeLocalChoice(id) {
        const newChoices = localChoices.filter(choice => choice.id !== id);
        const choices = [
            ...newChoices,
        ];
        setLocalChoices(choices);
    };

    function toggleForm() {
        setFormVisibility(!isFormVisible);
    }

    function confirmForm() {
        if (localChoices.length < 2) {
            console.log('Es muss mindestens zwei Möglichkeiten geben')
            return;
        };
        setChoices(localChoices);
        toggleForm();
    }

    function abortForm() {
        toggleForm();
    }
    
    function whilePickerRunning() {
        setPickerStatus('running');
    }
    
    function afterPickerFinshed() {
        setPickerStatus('finished');
    }

    function reset() {
        setChoices([]);
        setLocalChoices([]);
        setPickerStatus(null);
    }

    return (
        <div>
            {
                /*
                choices && choices.length >= 2
                && !isFormVisible
                && !pickerStatus
                    &&
                    <button onClick={reset}>reset</button>
                */
            }
            {
                choices && choices.length < 2
                && !isFormVisible
                    &&
                    <Intro toggleForm={toggleForm} />
            }
            <ChoicesForm 
                isVisible={isFormVisible}
                choices={localChoices} 
                addChoice={addLocalChoice}
                removeChoice={removeLocalChoice}
                toggleVisibility={toggleForm}
                confirm={confirmForm}
                abort={abortForm}
            />
            {
                choices && choices.length >= 2
                && !isFormVisible
                    &&
                    <RandomPicker 
                        items={choices.map(object => object.title)} 
                        toggleForm={toggleForm}
                        reset={reset}
                        status={pickerStatus}
                        onStart={whilePickerRunning}
                        onStop={afterPickerFinshed}
                    />
            }
        </div>
    )
}