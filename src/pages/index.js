import React, { useState } from "react";
import _ from "lodash";
import RandomPicker from "../components/RandomPicker";
import ChoicesForm from "../components/ChoicesForm";

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
        setLocalChoices([]);
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
                choices && choices.length >= 2
                && !isFormVisible
                && !pickerStatus
                    &&
                    <button onClick={reset}>reset</button>
            }
            {
                choices && choices.length < 2
                && !isFormVisible
                    &&
                    <button onClick={toggleForm}>Neue Entscheidung</button>
            }
            <ChoicesForm 
                isVisible={isFormVisible}
                choices={localChoices} 
                addChoice={addLocalChoice}
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
                        onStart={whilePickerRunning}
                        onStop={afterPickerFinshed}
                    />
            }
            {
                choices && choices.length > 0
                && !isFormVisible
                && !pickerStatus
                    &&
                    <button onClick={toggleForm}>Optionen bearbeiten</button>
            }
            {
                pickerStatus && pickerStatus.trim().toLowerCase() === 'finished'
                    &&
                    <button onClick={reset}>Okay</button>
            }
        </div>
    )
}