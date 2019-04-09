import React from "react";
import PropTypes from "prop-types";
import RandomPickerChoice from "./choice";
import Headline from "../Headline";
import Shell from "../../layout/Shell";

import './_RandomPicker.scss';
import RandomPickerControls from "./controls";
import LoadingIndicator from "../LoadingIndicator";

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

    componentWillUnmount() {
        this.setState({ isFinished: false })
    }

    start() {
        if (this.props.items.length <= 0) return;
        if (this.props.onStart) {
            this.props.onStart();
        }
        clearInterval(this.interval);
        this.setState({ isRunning: true });
        this.interval = setInterval(this.setChoice, this.intervalDuration);
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
        const { toggleForm, status, reset } = this.props;

        return (
            <div className="RandomPicker">
                <Shell>
                    <Shell.Header>
                        <Headline 
                            size="h1"
                            style={{
                                color: isFinished ? '#bbbbbb' : '#000',
                                transition: 'color 1000ms ease-in-out',
                            }}
                        >
                            Lass die Würfel entscheiden!
                        </Headline>
                    </Shell.Header>

                    <Shell.Body>
                        <div className="RandomPicker__body">
                            <LoadingIndicator isLoading={isRunning} duration={this.duration} />
                            <RandomPickerChoice isRunning={isRunning} choice={currentChoice} />
                        </div>
                    </Shell.Body>

                    <Shell.Controls>                        
                        <RandomPickerControls 
                            isRunning={isRunning}
                            isFinished={isFinished}
                            status={status}
                            toggleForm={toggleForm}
                            start={this.start}
                            stop={this.stop}
                            reset={reset}                            
                        />
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