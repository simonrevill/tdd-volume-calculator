import Pyramid from './Pyramid';

describe('pyramid tests', () => {
  describe('pyramid initialisation tests', () => {
    it('throws an error when length is negative', () => {
      expect(() => {
        new Pyramid(-10, 10, 10);
      }).toThrow('Length cannot be a negative number. Value given was -10.');
    });

    it('throws an error when width is negative', () => {
      expect(() => {
        new Pyramid(10, -10, 10);
      }).toThrow('Width cannot be a negative number. Value given was -10.');
    });
  });

  describe('cubic centimetre volume tests', () => {
    it('creates a pyramid with a length of 10', () => {
      const pyramid = new Pyramid(10, 10, 10);

      expect(pyramid.length).toBe(10);
    });

    it('creates a pyramid with a width of 10', () => {
      const pyramid = new Pyramid(10, 10, 10);

      expect(pyramid.width).toBe(10);
    });

    it('creates a pyramid with a height of 10', () => {
      const pyramid = new Pyramid(10, 10, 10);

      expect(pyramid.height).toBe(10);
    });

    it('creates a pyramid with the volume of 333.33', () => {
      const pyramid = new Pyramid(10, 10, 10);

      expect(pyramid.getAreaInCubicCentimetres()).toBe(333.33);
    });
  });
});
