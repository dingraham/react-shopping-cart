/// <reference types="cypress" />
const getRandomPercentage = (percentage: number) => Math.random() < percentage;

describe('Flake Examples', () => {
  it('90 Percent', () => {
    expect(getRandomPercentage(0.9)).to.be.true;
  });

  it('75 Percent', () => {
    expect(getRandomPercentage(0.75)).to.be.true;
  });

  it('50 Percent', () => {
    expect(getRandomPercentage(0.5)).to.be.true;
  });

  it('25 Percent', () => {
    expect(getRandomPercentage(0.25)).to.be.true;
  });

  it('10 Percent', () => {
    expect(getRandomPercentage(0.1)).to.be.true;
  });
});
