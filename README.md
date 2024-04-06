# Volume Calculator

A TDD practice exercise suggested by Jason Gorman in his book on the subject - Codemanship - TDD.

## Instructions

Writing the assertions first and working backwards to the set-up, test-drive some code to calculate how much water will be needed to to fill the following:

1. A cube
2. A cylinder
3. A pyramid

## Notes before test-driving the code

To calculate the volume of any solid, there are two steps required:

1. Calculate the volume in cubic cm - cm<sup>3</sup>.
2. Covert the cm<sup>3</sup> volume to litres.

### Cube

The formula for calculating the volume of a cube in cm<sup>3</sup> is L x W x H:

10cm x 10cm x 10cm = 1000cm<sup>3</sup>

1 litre is equal to 1000cm<sup>3</sup>. Therefore to calculate the volume of water needed to fill the cube in litres, you can simply divide the cm<sup>3</sup> volume by 1000:

1000cm<sup>3</sup> / 1000 = 1 litre.

### Cylinder

The formula for calculating the volume of a cylinder is &#960; x r<sup>2</sup> x H:

&#960; x 10cm<sup>2</sup> x 10cm

which is also:

&#960; x 100cm x 10cm = 3141.59cm<sup>3</sup>

Therefore the volume of this cylinder is 3141.59cm<sup>3</sup> / 1000 = 3.14 litres

### Pyramid

The formula for calculating the volume of a pyramid is 1/3 x L x W x H:

1/3 x 10cm<sup>3</sup> x 10cm<sup>3</sup> 10cm<sup>3</sup> = 333.33cm<sup>3</sup>

Therefore the volume of this pyramid is 333.33cm<sup>3</sup> / 1000 = 0.33 litres
