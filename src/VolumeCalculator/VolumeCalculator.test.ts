import Cube from '../Cube';
import Cylinder from '../Cylinder/Cylinder';
import Pyramid from '../Pyramid';
import VolumeCalculator from './VolumeCalculator';

describe('volume calculator tests', () => {
  describe('cube litre tests', () => {
    it('gets the volume of a cube in litres which is 1', () => {
      const cube = new Cube(10, 10, 10);
      const volumeCalculator = new VolumeCalculator();

      expect(volumeCalculator.getRequiredLitresOfWater(cube)).toBe(1);
    });
  });

  describe('cylinder litre tests', () => {
    it('gets the volume of a cylinder in litres which is 3.14', () => {
      const pyramid = new Cylinder(10, 10);
      const volumeCalculator = new VolumeCalculator();

      expect(volumeCalculator.getRequiredLitresOfWater(pyramid)).toBe(3.14);
    });
  });

  describe('pyramid litre tests', () => {
    it('gets the volume of a pyramid in litres which is 0.33', () => {
      const pyramid = new Pyramid(10, 10, 10);
      const volumeCalculator = new VolumeCalculator();

      expect(volumeCalculator.getRequiredLitresOfWater(pyramid)).toBe(0.33);
    });
  });
});
