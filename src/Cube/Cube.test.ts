import Cube from './Cube';

describe('cube tests', () => {
  describe('cubic centimetre volume tests', () => {
    it('creates a cube with length of 10', () => {
      const cube = new Cube(10, 10, 10);

      expect(cube.length).toBe(10);
    });

    it('creates a cube with width of 10', () => {
      const cube = new Cube(10, 10, 10);

      expect(cube.width).toBe(10);
    });

    it('creates a cube with height of 10', () => {
      const cube = new Cube(10, 10, 10);

      expect(cube.height).toBe(10);
    });

    it('creates a cube with the volume of 1000', () => {
      const cube = new Cube(10, 10, 10);

      expect(cube.getAreaInCubicCentimetres()).toBe(1000);
    });
  });
});
