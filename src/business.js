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
    let answer = (72.38 * this.convertAge())/this.age;
    return Number(Math.round(answer +'e2') + 'e-2');
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

