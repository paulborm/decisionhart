import React from "react";
import PropTypes from "prop-types";
import RandomPickerChoice from "./choice";
import RandomPickerControls from "./controls";

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
        const { isRunning, isFinished, currentChoice } = this.state;

        return (
            <div className="RandomPicker">
                <RandomPickerChoice choice={currentChoice} />
                <RandomPickerControls
                    isRunning={isRunning}
                    isFinished={isFinished}
                    start={this.start}
                    stop={this.stop}
                />
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