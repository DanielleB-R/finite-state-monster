'use strict';

let Definition = require('./definition');
let Instance = require('./instance').Instance;

class Machine {
    constructor(definition) {
        this.definition = Definition.convert(definition);
    }
    begin(event) {
        let instance = new Instance(this, '');
        instance.move(event);
        return instance;
    }
    transitions(state) {
        return this.definition[state];
    }
}

module.exports = {
    Machine
};
