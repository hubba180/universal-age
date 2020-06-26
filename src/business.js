export class Person {
  constructor(age) {
    this.age = age;
  }

  convertAge(planet) {
    const lowerCasePlanet = planet.toLowerCase();
    if (lowerCasePlanet === "mercury") {
      return Number(Math.round((this.age * 0.24)+'e2')+'e-2');
    } else if (lowerCasePlanet === "venus") {
      return Number(Math.round((this.age * 0.64)+'e2')+'e-2');
    } else if (lowerCasePlanet === "mars") {
      return Number(Math.round((this.age / 1.88)+'e2')+'e-2');
    } else if (lowerCasePlanet === "jupiter") {
      return Number(Math.round((this.age / 11.86)+'e2')+'e-2');
    }
  }
}

function calcLifeExp(age) {
  
}