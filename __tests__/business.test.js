import {Person} from '../src/business.js';

describe('Person age tests', () => {
  let person;

  beforeEach(() => {
    person = new Person(10);
  })

  test('should correctly save age', () => {
    expect(person.age).toEqual(10);
  });
});