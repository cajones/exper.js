/*global describe, it*/
var exper = require('../../src/exper'),
    ExperFactory = require('../../src/ExperFactory'),
    StatementFactory = require('../../src/StatementFactory'),
    expect = require('expect.js');

describe('Given exper is loaded', function () {
    describe('when I create it using the new keyword', function () {
        it('should provide a ExperFactory', function () {
            expect(exper).to.be(ExperFactory);
            expect(new exper()).to.be.an(ExperFactory);
        });
    });

    describe('when I create it by invoking it as a function', function () {
        it('should provide a ExperFactory', function () {
            expect(exper).to.be(ExperFactory);
            expect(exper()).to.be.an(ExperFactory);
        });
    });

    describe('when I make a statement', function () {
        it('should provide a StatementFactory', function () {
            expect(exper().statement()).to.be.a(StatementFactory);
        });
    });
});