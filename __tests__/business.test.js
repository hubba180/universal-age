import {Person} from '../src/business.js';

describe('Person age tests', () => {
  let person;

  beforeEach(() => {
    person = new Person(10);
  })

  test('should correctly save age', () => {
    expect(person.age).toEqual(10);
  });

  test('should convert Earth age into Mercury age', () => {
    expect(person.convertAge("Mercury")).toEqual(2.4);
  });

  test('should return correct Earth age converted to Venus age', () => {
    expect(person.convertAge("Venus")).toEqual(6.4);
  });

  test('should convert Earth age into Mars age', () => {
    expect(person.convertAge("Mars")).toEqual(5.32);
  });

  test('should convert Earth age to Jupiter age', () => {
    expect(person.convertAge("Jupiter")).toEqual(0.84)
  })
});