export class Person {
  constructor(age) {
    this.age = age;
  }

  convertAge(planet) {
    const lowerCasePlanet = planet.toLowerCase();
    if (lowerCasePlanet === "mercury") {
      return this.age * 0.24;
    } else if (lowerCasePlanet === "venus") {
      return this.age * .64;
    } else if (lowerCasePlanet === "mars") {
      return this.age * 1.88;
    }
  }
}