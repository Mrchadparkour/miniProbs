const pascals = require('./pascalsTriangle');
const chai = require('chai');
const expect = chai.expect;

describe('Pascals Triangle', () => {
  it('should return an array', () => {
    expect(pascals.Triangle(1)).to.be.a('array');
  });

  it('should have nth amount of arrays', () => {
    expect(pascals.Triangle(2).length).to.eql(2);
  });

  it('array n of final should be length of n', () => {
    expect(pascals.Triangle(2)[1].length).to.eql(2);
  });

  it("I'm returning", () => {
    expect(pascals.Triangle(9)).to.be.ok;
  })

});
