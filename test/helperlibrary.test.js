

import isEmpty from "../helperlibrary/src/isEmpty"
import isArrayLike from"../helperlibrary/src/isArrayLike"
import countBy from"../helperlibrary/src/countBy"
import filter from"../helperlibrary/src/filter"
import words from"../helperlibrary/src/words"


describe("isEmpty", () => {
  test("Check if array is empty", () => {
    const emptyArray = [] // prepare
    expect(isEmpty(emptyArray)).toBe(true) // test
  });

  test("Array is not empty, Return false", () => {
    const array = ["test"]  // prepare
    expect(isEmpty(array)).toBe(false) // test
  });
  test("Array is not empty, more than one item, Return false", () => {
    const array = ["test","test"] // prepare
    expect(isEmpty(array)).toBe(false) // test
  });
});

describe("isArrayLike", () => {


  test("Check if it is array, return true", () => {
    const array = [] // prepare
    expect(isArrayLike(array)).toBe(true) // test
  });
  test("Check if it is array, two item in array, return true", () => {
    const array = ["test","test"] // prepare
    expect(isArrayLike(array)).toBe(true) // test
  });

  test("Check if it is array, object, return false", () => {
    const object = {} // prepare
    expect(isArrayLike(object)).toBe(false) // test
  });

});
describe("countBy", () => {
  test("dummy", () => {
    expect(3).toBe(3);
  });
});
describe("filter", () => {
  test("dummy", () => {
    expect(3).toBe(3);
  });
});
describe("words", () => {
  test("dummy", () => {
    expect(3).toBe(3);
  });
});
describe("isEmpty", () => {
  test("dummy", () => {
    expect(3).toBe(3);
  });
});
describe("isEmpty", () => {
  test("dummy", () => {
    expect(3).toBe(3);
  });
});
