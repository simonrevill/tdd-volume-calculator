import Cylinder from './Cylinder';

describe('cylinder tests', () => {
  describe('cylinder initialisation tests', () => {
    it('throws an error when radius is negative', () => {
      expect(() => {
        new Cylinder(-10, 10);
      }).toThrow('Radius cannot be a negative number. Value given was -10.');
    });

    it('throws an error when height is negative', () => {
      expect(() => {
        new Cylinder(10, -10);
      }).toThrow('Height cannot be a negative number. Value given was -10.');
    });
  });

  describe('cubic centimetre volume tests', () => {
    it('creates a cylinder with radius of 10', () => {
      const cylinder = new Cylinder(10, 10);

      expect(cylinder.radius).toBe(10);
    });

    it('creates a cylinder with height of 10', () => {
      const cylinder = new Cylinder(10, 10);

      expect(cylinder.height).toBe(10);
    });

    it('creates a cylinder with a volume of 3141.59', () => {
      const cylinder = new Cylinder(10, 10);

      expect(cylinder.getAreaInCubicCentimetres()).toBe(3141.59);
    });
  });
});
