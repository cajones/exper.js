(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return (root.exper = require('./ExperFactory'));
        });
    } else if (typeof exports === 'object') {
        module.exports = root.exper = require('./ExperFactory');
    }
    if(typeof window !== 'undefined') {
        window.exper = root.exper;
    }
}(this));