'use strict';
/* @flow */

let Definition = require('./definition');

class Machine {
    definition: {[key: string]: {[key: string]: string}};
    constructor(definition: Array<any> | {[key: string]: any}) {
        this.definition = Definition.convert(definition);
    }
}

module.exports = {
    Machine
};
