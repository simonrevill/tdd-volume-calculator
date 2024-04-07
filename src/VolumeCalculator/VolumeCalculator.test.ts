import Cube from '../Cube';
import VolumeCalculator from './VolumeCalculator';

describe('volume calculator tests', () => {
  describe('cube litre tests', () => {
    it('gets the volume of a cube in litres which is 1', () => {
      const cube = new Cube(10, 10, 10);
      const volumeCalculator = new VolumeCalculator();

      expect(volumeCalculator.getRequiredLitresOfWater(cube)).toBe(1);
    });
  });
});
