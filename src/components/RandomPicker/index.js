import React from "react";
import PropTypes from "prop-types";
import RandomPickerChoice from "./choice";
import Button from "../Button";
import Headline from "../Headline";
import Shell from "../../layout/Shell";

import './_RandomPicker.scss';

export default class RandomPicker extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            isRunning: false,
            isFinished: false,
            currentChoice: ''
        };

        this.interval = null;
        this.intervalDuration = 25;
        this.duration = 1000;

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.pickChoice = this.pickChoice.bind(this);
        this.setChoice = this.setChoice.bind(this);
    }

    start() {
        if (this.props.items.length <= 0) return;
        if (this.props.onStart) {
            this.props.onStart();
        }
        clearInterval(this.interval);
        this.interval = setInterval(this.setChoice, this.intervalDuration);
        this.setState({ isRunning: true });
        setTimeout(() => {
            if (this.state.isRunning) {
                this.stop()
            }
        }, this.duration);
    }

    stop() {
        if (this.props.onStop) {
            this.props.onStop();
        }
        clearInterval(this.interval);
        this.setState({ isRunning: false, isFinished: true });
    }

    pickChoice() {
        const { items } = this.props;
        const choice = items[Math.floor(Math.random() * items.length)];
        return choice;
    }

    setChoice() {
        this.setState({ currentChoice: this.pickChoice() })
    }

    render() {
        const { isRunning, currentChoice } = this.state;
        const { toggleForm, status, reset } = this.props;

        return (
            <div className="RandomPicker">
                <Shell>
                    <Shell.Header>
                        <Headline size="h1">Lass die Würfen entscheiden!</Headline>
                    </Shell.Header>
                    <Shell.Body>
                        <div className="RandomPicker__body">
                            <RandomPickerChoice choice={currentChoice} />
                        </div>
                    </Shell.Body>
                    <Shell.Controls>                        
                        {
                            status && status.trim().toLowerCase() === 'finished'
                                ?
                                <Button 
                                    className={`RandomPicker__button`} 
                                    onClick={reset}
                                >
                                    Jawohl wird gemacht
                                </Button>
                                :
                                <React.Fragment>
                                    <Button 
                                        text 
                                        className={`RandomPicker__button`} 
                                        onClick={toggleForm}
                                    >
                                        Möglichkeiten bearbeiten
                                    </Button>
                                    <Button
                                        className={`RandomPicker__button ${isRunning && 'RandomPicker__button--stop'}`}
                                        onClick={isRunning ? this.stop : this.start}
                                    >
                                        {isRunning ? 'stop' : 'start'}
                                    </Button>
                                </React.Fragment>
                        }
                    </Shell.Controls>
                </Shell>
            </div>
        );
    }
}

RandomPicker.propTypes = {
    items: PropTypes.array,
    duration: PropTypes.number,
    onStart: PropTypes.func,
    onStop: PropTypes.func,
};