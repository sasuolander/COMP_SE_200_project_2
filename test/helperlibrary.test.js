import isEmpty from "../helperlibrary/src/isEmpty";
import isArrayLike from "../helperlibrary/src/isArrayLike";
import countBy from "../helperlibrary/src/countBy";
import filter from "../helperlibrary/src/filter";
import words from "../helperlibrary/src/words";

describe("isEmpty", () => {
  // prepare test values
  const emptyArray = [];
  const emptyString = "";
  const array = ["test"];
  const arrayTwoItem = ["test", "test"];

  const emptyObject = {};
  const emptySet = new Set();
  const emptyMap = new Map();

  const nonEmptyObject = { value: "" };
  const nonEmptySet = new Set([1, 2, 3, 4]);
  const nonEmptyMap = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);

const arrayTypped = new Int8Array
const arrayTyppedFilled = new Int8Array(1)
    arrayTyppedFilled[0] = 23
  const nonEmptySetnonEmptyObjectString = new Set(["1", "2", "3", "3"]);
  const nonEmptyMapnonEmptyObjectString = new Map([
    ["1", "one"],
    ["2", "two"],
    ["3", "three"],
  ]);

  test("1 Check if array is empty", () => {
    expect(isEmpty(emptyArray)).toBe(true); // test
  });

  test("2 Array is not empty, Return false", () => {
    expect(isEmpty(array)).toBe(false); // test
  });
  test("3 Array is not empty, more than one item, Return false", () => {
    expect(isEmpty(arrayTwoItem)).toBe(false); // test
  });

  test("4 Check if object is empty", () => {
    expect(isEmpty(emptyObject)).toBe(true); // test
  });

  test("6 Check if object is empty, non empty objet, return false", () => {
    expect(isEmpty(nonEmptyObject)).toBe(false); // test
  });

  test("7 Check if set is empty", () => {
    expect(isEmpty(emptySet)).toBe(true); // test
  });
  test("8 Check if set is empty, non empty set, return false", () => {
    expect(isEmpty(nonEmptySet)).toBe(false); // test
  });
  test("9 Check if set is empty, non empty string set, return false", () => {
    expect(isEmpty(nonEmptySetnonEmptyObjectString)).toBe(false); // test
  });

  test("10 Check if map is empty", () => {
    expect(isEmpty(emptyMap)).toBe(true); // test
  });

  test("11 Check if map is empty, non empty map, return false", () => {
    expect(isEmpty(nonEmptyMap)).toBe(false); // test
  });

  test("12 Check if map is empty, non empty string map, return false", () => {
    expect(isEmpty(nonEmptyMapnonEmptyObjectString)).toBe(false); // test
  });


  test("13 Check if nil is empty", () => {
    expect(isEmpty(null)).toBe(true); // test
  });
  test("14 Check if empty string is empty", () => {
    expect(isEmpty(emptyString)).toBe(true); // test
  });

  test("15 Check if typed array is empty", () => {
    expect(isEmpty(arrayTypped)).toBe(true); // test
  });
  test("16 Check if typed array is empty, prefilled", () => {
    expect(isEmpty(arrayTyppedFilled)).toBe(false); // test
  });

});

describe("isArrayLike", () => {
  test("17 Check if it is array, return true", () => {
    const array = []; // prepare
    expect(isArrayLike(array)).toBe(true); // test
  });
  test("18 Check if it is array, two item in array, return true", () => {
    const array = ["test", "test"]; // prepare
    expect(isArrayLike(array)).toBe(true); // test
  });

  test("19 Check if it is array, object, return false", () => {
    const object = {}; // prepare
    expect(isArrayLike(object)).toBe(false); // test
  });
});

describe("countBy", () => {
  const items = [
    { item: "Dummy3", bought: true },
    { item: "Dummy1", bought: true },
    { item: "Dummy1", bought: false },
  ];

  const items2 = [6.1, 4.2, 6.3];
  const items3 = ["one", "two", "three"];

  test("20 Check items, Array", () => {
    const result = countBy(items2, Math.floor);
    //console.log(result); // here is bug { '4': 0, '6': 1 }
    expect(result[4]).toEqual(1);
    expect(result[6]).toEqual(2);
  });

  test("21 Check items, Array and prototype properties", () => {
    const result = countBy(items3, "length");
    expect(result[3]).toEqual(2);
    expect(result[5]).toEqual(1);
  });

  test("22 Check items, Object", () => {
    const result = countBy(items, (value) => value.bought); // here is also bug
      console.log(result);
    expect(result.true).toEqual(2);
    expect(result.false).toEqual(1);
  });
});

describe("filter", () => {
  const listObject = [
    { productName: "Talo", price: 10, bought: true },
    { productName: "Talo", price: 10, bought: true },
    { productName: "Talo", price: 10, bought: true },
    { productName: "Talo", price: 10, bought: true },
    { productName: "Siina", price: 20, bought: false },
    { productName: "Siina", price: 20, bought: false },
    { productName: "Siina", price: 20, bought: false },
    { productName: "Siina2", price: 15, bought: false },
    { productName: "Siina", price: 20, bought: false },
  ];

  const listString = [
    "Talo",
    "Talo",
    "Talo",
    "Talo",
    "Siina",
    "Siina",
    "Siina",
    "Siina2",
    "Siina",
  ];

  const listBoolean = [
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
  ];

  const listNumber = [10, 10, 10, 10, 20, 20, 20, 15, 20];

  test("23 filter array with object, string", () => {
    const result = filter(listObject, (value) => value.productName == "Talo");
    expect(result.length).toEqual(4);
    const result2 = filter(
      listObject,
      (value) => value.productName == "Siina2"
    );
    expect(result2.length).toEqual(1);
  });

  test("24 filter array with object, number", () => {
    const result = filter(listObject, (value) => value.price == 20);
    expect(result.length).toEqual(4);
    const result2 = filter(listObject, (value) => value.price == 15);
    expect(result2.length).toEqual(1);
  });

  test("25 filter array with object, boolean", () => {
    const result = filter(listObject, (value) => value.bought == true);
    expect(result.length).toEqual(4);
    const result2 = filter(listObject, (value) => value.bought == false);
    expect(result2.length).toEqual(5);
  });

  test("26 filter array, string", () => {
    const result = filter(listString, (value) => value == "Talo");
    expect(result.length).toEqual(4);
    const result2 = filter(listString, (value) => value == "Siina2");
    expect(result2.length).toEqual(1);
  });

  test("27 filter array, number", () => {
    const result = filter(listNumber, (value) => value == 20);
    expect(result.length).toEqual(4);
    const result2 = filter(listNumber, (value) => value == 15);
    expect(result2.length).toEqual(1);
    const result3 = filter(listNumber, (value) => value == 50);
    //console.log(result3) // here is bug [ [] ]
    expect(result3.length).toEqual(0);
  });

  test("28 filter array, boolean", () => {
    const result = filter(listBoolean, (value) => value == true);
    expect(result.length).toEqual(4);
    const result2 = filter(listBoolean, (value) => value == false);
    expect(result2.length).toEqual(5);
  });

});

describe("words", () => { // TODO add test for ascii and unicode symbols
  test("29 Split without regex", () => {
    const result = words("Apple, Fish, & Lounas");
    expect(result.length).toEqual(3);
  });
  test("30 Split with regex", () => {
    const result = words("Apple, Fish, & Lounas",/[^, ]+/g);
    expect(result.length).toEqual(4);
  });
});
