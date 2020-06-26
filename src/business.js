export class Person {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  convertAge() {
    const planetRatio = findPlanetYrRatio(this.planet);
    return Number(Math.round((this.age / planetRatio)+'e2')+'e-2');
  }

  calcLifeExpt() {
    const planetAge = this.convertAge();
    const lifeExpectancy = (72.38 * planetAge)/this.age;
    const roundedAns = Number(Math.round(lifeExpectancy +'e2') + 'e-2');
    const yearsLeft = roundedAns - planetAge;
    if (roundedAns > planetAge) {
      return `you'd live till about ${roundedAns} which means you have only about ${yearsLeft} years left to live!`;
    } else {
      return `everydays a gift for you since the life expectancy on ${this.planet} is ${roundedAns}`;
    }
  }
}


// 10/72.38 = planet age/x

function findPlanetYrRatio(planet) {
  const planetMod = planet.toLowerCase();
  if (planetMod === "mercury") {
    return 0.24;
  } else if (planetMod === "venus") {
    return 0.64;
  } else if (planetMod === "mars") {
    return 1.88;
  } else if (planetMod === "jupiter") {
    return 11.86;
  }
}

