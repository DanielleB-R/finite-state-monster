'use strict';
/* @flow */

class Instance {
    constructor(machine, state) {
        this.state = state;
        this.machine = machine;
    }

    move(event) {
        if (event === undefined) {
            return;
        }

        let transitions = this.machine.transitions(this.state);
        if (transitions === undefined) {
            return;
        }

        let newState = transitions[event];
        if (newState === undefined) {
            return;
        }

        this.state = newState;
        return this;
    }
}


module.exports = {
    Instance
};
