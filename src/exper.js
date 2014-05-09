(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['./ExperFactory'], function (ExperFactory) {
            return (root.exper = ExperFactory);
        });
    } else if (typeof exports === 'object') {
        module.exports = require('./ExperFactory');
    }
}(this));