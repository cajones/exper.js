var StatementFactory = require('./StatementFactory');

var ExperFactory = function () {
    if(typeof window === 'undefined' && this === global) {
        return new ExperFactory();
    }
};

ExperFactory.prototype.statement = function () {
    return new StatementFactory();
};

module.exports = ExperFactory;