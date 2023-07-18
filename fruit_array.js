const fruitsArray = [
  "banana",
  "cherry",
  "orange",
  "apple",
  "cherry",
  "orange",
  "apple",
  "banana",
  "cherry",
  "orange",
  "fig",
];

/**
 * output should be something like this
 * [
 * {
 * banana: {count: 2}
 * }
 * {
 * cherry: {count :3}
 * }
 * ]
 */

const fruitCounts = {};

//counting the fruits inside the array

fruitsArray.forEach((fruit) => {
  //if the fruit in inside the array we add 1 to the count
  if (fruitCounts[fruit]) {
    fruitCounts[fruit].count++;
  } else {
    //if the fruit is not inside the fruitcounts object at the moment, we create a new object
    fruitCounts[fruit] = { count: 1 };
  }
});

//we change fruitCounts object into an array
const outputArr = Object.entries(fruitCounts).map(([fruit, count]) => ({
  [fruit]: count,
}));

console.log(outputArr);

const increasingOrderArr = outputArr.sort(
  (a, b) => a[Object.keys(a)[0]].count - b[Object.keys(b)[0]].count
);
console.log(increasingOrderArr);

const decreasingOrderArr = outputArr.sort(
  (a, b) => b[Object.keys(b)[0]].count - a[Object.keys(a)[0]].count
);
console.log(decreasingOrderArr);

