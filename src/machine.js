'use strict';

let Definition = require('./definition');

class Machine {
    constructor(definition: Array<any> | {[key: string]: any}) {
        this.definition = Definition.convert(definition);
    }
}

module.exports = {
    Machine
};
