'use strict';

/* eslint-env mocha */
/* global assert */

let Machine = require('../src/machine');

describe('Machine class', function() {
    let testDefinition = {
        '': {
            top: 'header',
            bottom: 'footer',
            scroll: 'middle'
        },
        header: {
            up: 'error',
            down: 'middle'
        },
        middle: {
            up: 'header',
            down: 'bottom'
        },
        footer: {
            up: 'middle',
            down: 'error'
        }
    };

    describe('the constructor', function() {
        it('should save the definition in the object', function() {
            let testMachine = new Machine.Machine(testDefinition);
            assert.deepEqual(testMachine.definition, testDefinition);
        });
    });
});
