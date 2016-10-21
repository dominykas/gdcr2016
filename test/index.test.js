const expect = require('code').expect;
const Gol = require('../src');

describe('game of life', () => {

  it('returns 1',  () => {
    expect(Gol()).to.equal(1);
  });

});
