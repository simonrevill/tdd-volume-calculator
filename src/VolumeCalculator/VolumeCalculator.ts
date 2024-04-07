import { Solid } from '../types';

export default class VolumeCalculator {
  getRequiredLitresOfWater(solid: Solid): number {
    return solid.getAreaInCubicCentimetres() / 1000;
  }
}
