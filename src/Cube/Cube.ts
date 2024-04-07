import { Solid } from '../types';

export default class Cube implements Solid {
  #length: number;
  #width: number;
  #height: number;

  constructor(length: number, width: number, height: number) {
    if (length < 0) {
      throw new Error(`Length cannot be a negative number. Value given was ${length}.`);
    }
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
    return this.length * this.width * this.height;
  }
}
