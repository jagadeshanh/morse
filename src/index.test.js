const expect = require('chai').expect;
const assert = require("assert");

let morse = require('./index');

describe('morse', function () {
    // test encoder
    describe('encoder', function () {
        it('should return a string', function () {
            expect(morse.encode('morse')).to.be.string;
        });
        it('should encode a random string', function () {
            let str = Math.random().toString(36).slice(-5);
            expect(morse.encode(str)).to.be.string;
        });
    });

    // test decoder
    describe('decoder', function () {
        it('should return a string', function () {
            expect(morse.decode('.... ..')).to.be.string;
        });
        it('should decode a random string', function () {
            let str = Math.random().toString(36).slice(-5);
            let encodedString = morse.encode(str);
            let decodedString = morse.decode(encodedString);
            assert.equal(str, decodedString);
        });
    });
});