export class Person {
  constructor(age) {
    this.age = age;
  }

  convertAge(planet) {
    const planetRatio = findPlanetYrRatio(planet.toLowerCase());
    return Number(Math.round((this.age / planetRatio)+'e2')+'e-2');
      
      
      
    // if (lowerCasePlanet === "mercury") {
    //   return Number(Math.round((this.age / 0.24)+'e2')+'e-2');
    // } else if (lowerCasePlanet === "venus") {
    //   return Number(Math.round((this.age / 0.64)+'e2')+'e-2');
    // } else if (lowerCasePlanet === "mars") {
    //   return Number(Math.round((this.age / 1.88)+'e2')+'e-2');
    // } else if (lowerCasePlanet === "jupiter") {
    //   return Number(Math.round((this.age / 11.86)+'e2')+'e-2');
    // }
  }
}

function findPlanetYrRatio(planet) {
  if (planet === "mercury") {
    return 0.24
  } else if (planet === "venus") {
    return 0.64
  } else if (planet === "mars") {
    return 1.88
  } else if (planet === "jupiter") {
    return 11.86
  }
}

// function calcLifeExp(age, planet) {
  
// }