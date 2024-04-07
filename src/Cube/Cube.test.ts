import Cube from './Cube';

describe('cube tests', () => {
  describe('cube initialisation tests', () => {
    it('throws an error when length is negative', () => {
      expect(() => {
        new Cube(-10, 10, 10);
      }).toThrow('Length cannot be a negative number. Value given was -10.');
    });

    it('throws an error when width is negative', () => {
      expect(() => {
        new Cube(10, -10, 10);
      }).toThrow('Width cannot be a negative number. Value given was -10.');
    });

    it('throws an error when height is negative', () => {
      expect(() => {
        new Cube(10, 10, -10);
      }).toThrow('Height cannot be a negative number. Value given was -10.');
    });
  });

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
