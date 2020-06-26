export class Person {
  constructor(age) {
    this.age = age;
  }

  convertAge(planet) {
    const newVar = planet.toLowerCase();
    if (newVar === "mercury") {
      return this.age * 0.24;
    } else if (newVar === "venus") {
      return this.age * .64;
    }
  }
}