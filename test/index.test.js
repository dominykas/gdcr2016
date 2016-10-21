'use strict';

const expect = require('code').expect;
const App = require('../src');

describe('game of life', () => {

    it('returns 1', () => {

        expect(App()).to.equal(1);
    });

});
