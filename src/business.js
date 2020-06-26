export class Person {
  constructor(age) {
    this.age = age;
  }

  convertAge(planet) {
    if (planet === "mercury") {
      return this.age * 0.24;
    }
  }
}