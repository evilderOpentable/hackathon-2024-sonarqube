const assert = require('chai').assert;
const expect = require('chai').expect;

describe("incomplete assertions", function() {
    const value = 42;

    it("uses chai 'assert'", function() {
        assert.fail; // Noncompliant: Missing the call to 'fail'
    });

    it("uses chai 'expect'", function() {
        expect(1 == 1); // Noncompliant: Should chain with 'to.equal'
        expect(value.toString).to.throw; // Noncompliant: Missing the type of the exception
    });
});