(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var StatementFactory = require('./StatementFactory');

var ExperFactory = function () {
    var root = global || window;
    if(this === root) {
        return new ExperFactory();
    }
};

ExperFactory.prototype.statement = function () {
    return new StatementFactory();
};

module.exports = ExperFactory;
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./StatementFactory":2}],2:[function(require,module,exports){
var StatementFactory = function () {};

StatementFactory.prototype.who = function (actor) {
    return this;
};
StatementFactory.prototype.did = function () {
    return this;
};

module.exports = StatementFactory;

},{}],3:[function(require,module,exports){
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
},{"./ExperFactory":1}]},{},[1,2,3])