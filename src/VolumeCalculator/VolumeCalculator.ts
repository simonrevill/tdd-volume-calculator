import { Solid } from '../types';

export default class VolumeCalculator {
  getRequiredLitresOfWater(solid: Solid): number {
    const litres = solid.getAreaInCubicCentimetres() / 1000;

    const result = Number(litres.toFixed(2));

    return result;
  }
}
