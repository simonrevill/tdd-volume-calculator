export default class Cylinder {
  #radius: number;
  #height: number;

  constructor(radius: number, height: number) {
    if (radius < 0) {
      throw new Error(`Radius cannot be a negative number. Value given was ${radius}.`);
    }

    if (height < 0) {
      throw new Error(`Height cannot be a negative number. Value given was ${height}.`);
    }

    this.#radius = radius;
    this.#height = height;
  }

  get radius(): number {
    return this.#radius;
  }

  get height(): number {
    return this.#height;
  }
}
