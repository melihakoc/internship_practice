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

const sortedArr = outputArr.sort((a, b) => {
  const countA = a[Object.keys(a)[0]].count;
  const countB = b[Object.keys(b)[0]].count;

  if (sortIncreasing) {
    return countA - countB;
  } else {
    return countB - countA;
  }
});

if (sortIncreasing) {
  console.log("Increasing order:", sortedArr);
} else {
  console.log("Decreasing order:", sortedArr);
}


