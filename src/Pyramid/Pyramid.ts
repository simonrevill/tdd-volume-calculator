import { Solid } from '../types';

export default class Pyramid implements Solid {
  #length: number;
  #width: number;
  #height: number;

  constructor(length: number, width: number, height: number) {
    this.#length = length;
    this.#width = width;
    this.#height = height;
  }

  get length(): number {
    return this.#length;
  }

  get width(): number {
    return this.#width;
  }

  get height(): number {
    return this.#height;
  }

  getAreaInCubicCentimetres(): number {
    const area = (1 / 3) * this.#length * this.#width * this.#height;

    const result = Number(area.toFixed(2));

    return result;
  }
}
