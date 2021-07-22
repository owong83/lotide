const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💓💓💓Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💔💔💔Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};



const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const resultTwo = tail([]);
assertEqual(resultTwo.length, 0);
assertEqual(resultTwo[1], undefined);