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