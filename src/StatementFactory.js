var StatementFactory = function () {};

StatementFactory.prototype.who = function (actor) {
    return this;
};
StatementFactory.prototype.did = function () {
    return this;
};

module.exports = StatementFactory;
