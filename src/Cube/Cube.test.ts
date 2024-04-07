import Cube from './Cube';

describe('cubic centimetre volume tests', () => {
  it('creates a cube with length', () => {
    const cube = new Cube(10, 10, 10);
    expect(cube.length).toBe(10);
  });
});
