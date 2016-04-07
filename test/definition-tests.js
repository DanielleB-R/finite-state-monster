'use strict';

/* eslint-env mocha */
/* global assert */

let Definition = require('../src/definition');

describe('Definition module', function() {
    describe('convertDefinition', function() {
        const arrayDefinition = [
            ['', [
                ['first', 'one'],
                ['second', 'two']
            ]],
            ['one', [
                ['second', 'two']
            ]]
        ];

        const partialArrayDefinition = [
            ['', {
                first: 'one',
                second: 'two'
            }],
            ['one', {
                second: 'two'
            }]
        ];

        const partialObjectDefinition = {
            '': [
                ['first', 'one'],
                ['second', 'two']
            ],
            one: [
                ['second', 'two']
            ]
        };

        const objDefinition = {
            '': {
                first: 'one',
                second: 'two'
            },
            one: {
                second: 'two'
            }
        };

        it('should pass a fully-object definition as-is', function() {
            assert.deepEqual(Definition.convert(objDefinition), objDefinition);
        });

        it('should convert a partial array definition', function() {
            assert.deepEqual(Definition.convert(partialArrayDefinition), objDefinition);
        });

        it('should convert the arrays in a partial object definition', function() {
            assert.deepEqual(Definition.convert(partialObjectDefinition), objDefinition);
        });

        it('should convert a full array definition', function() {
            assert.deepEqual(Definition.convert(arrayDefinition), objDefinition);
        });
    });
});
