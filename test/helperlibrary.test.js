

import isEmpty from "../helperlibrary/src/isEmpty"
import isArrayLike from"../helperlibrary/src/isArrayLike"
import countBy from"../helperlibrary/src/countBy"
import filter from"../helperlibrary/src/filter"
import words from"../helperlibrary/src/words"


describe("isEmpty", () => {

  // prepare test values
  const emptyArray = [] 
  const array = ["test"] 
  const arrayTwoItem = ["test","test"] 

  const emptyObject= {}
  const emptySet = new Set()
  const emptyMap = new Map()

  const nonEmptyObject= {value:""}
  const nonEmptySet = new Set([1,2,3,4])
  const nonEmptyMap = new Map([[1,'one'],[2,'two'],[3,'three'],]);

  test("Check if array is empty", () => {
   
    expect(isEmpty(emptyArray)).toBe(true) // test
  });

  test("Array is not empty, Return false", () => {
    
    expect(isEmpty(array)).toBe(false) // test
  });
  test("Array is not empty, more than one item, Return false", () => {
    
    expect(isEmpty(arrayTwoItem)).toBe(false) // test
  });


  test("Check if object is empty", () => {
   
    expect(isEmpty(emptyObject)).toBe(true) // test
  });

  test("Check if object is empty, non empty objet, return false", () => {
   
    expect(isEmpty(nonEmptyObject)).toBe(false) // test
  });


  test("Check if set is empty", () => {
   
    expect(isEmpty(emptySet)).toBe(true) // test
  });
  test("Check if set is empty, non empty set, return false", () => {
   
    expect(isEmpty(nonEmptySet)).toBe(false) // test
  });


  test("Check if map is empty", () => {
   
    expect(isEmpty(emptyMap)).toBe(true) // test
  });

  test("Check if mao is empty, non empty map, return false", () => {
   
    expect(isEmpty(nonEmptyMap)).toBe(false) // test
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
