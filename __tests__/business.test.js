import {Person} from '../src/business.js';

describe('Person age tests', () => {
  let personMercury;
  let personVenus;
  let personMars;
  let personJupiter;

  beforeEach(() => {
    personMercury = new Person(10, "Mercury");
    personVenus = new Person(10, "Venus");
    personMars = new Person(10, "Mars")
    personJupiter = new Person(10, "Jupiter")
  })

  test('should correctly save age', () => {
    expect(personMercury.age).toEqual(10);
  });

  test('should convert Earth age into Mercury age', () => {
    expect(personMercury.convertAge()).toEqual(41.67);
  });

  test('should return correct Earth age converted to Venus age', () => {
    expect(personVenus.convertAge()).toEqual(15.63);
  });

  test('should convert Earth age into Mars age', () => {
    expect(personMars.convertAge()).toEqual(5.32);
  });

  test('should convert Earth age to Jupiter age', () => {
    expect(personJupiter.convertAge()).toEqual(0.84)
  });

  test('should calculate life expectancy on new planet', () => {
    expect(personMercury.calcLifeExpt()).toEqual("you'd live till about 301.61 which means you have only about 259.94 years left to live!");
  });
});