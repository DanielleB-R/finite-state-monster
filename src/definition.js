'use strict';

let _ = require('underscore');

let convertObjectDefinition = function(definition) {
    return _.mapObject(definition, function(transitions) {
        if (_.isArray(transitions)) {
            return _.object(transitions);
        } else if (_.isObject(transitions)) {
            return transitions;
        }
        return null;
    });
};

let convertArrayDefinition = function(definition) {
    return convertObjectDefinition(_.object(definition));
};

let convertDefinition = function(definition) {
    if (_.isArray(definition)) {
        return convertArrayDefinition(definition);
    } else if (_.isObject(definition)) {
        return convertObjectDefinition(definition);
    }
    throw new Error('Machine definition needs to be an object or array');
};

module.exports = {
    convert: convertDefinition
};
