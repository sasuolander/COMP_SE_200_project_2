

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

  const items = [
       { 'item': 'Dummy3', 'bought': true },
       { 'item': 'Dummy1', 'bought': true },
       { 'item': 'Dummy1', 'bought': false }
     ]

  const items2 = [6.1, 4.2, 6.3]
  const items3 = ['one', 'two', 'three']

  test("Check items, Array", () => {
   const result = countBy(items2, Math.floor);
   console.log(result)
    expect(result[4]).toEqual (1);
    expect(result[6]).toEqual (2);
  });

  test("Check items, Array and prototype properties", () => {
    const result = countBy(items3, 'length');
     expect(result[3]).toEqual (2);
     expect(result[5]).toEqual (1);
   });

  test("Check items, Object", () => {
    const result = countBy(items, value => value.bought);
     expect(result.true).toEqual (1);
     expect(result.false).toEqual (0);
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
