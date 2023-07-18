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

function countItems(fruitsArray) {
  const counts = {};
  fruitsArray.forEach((item) => {
    if (!counts[item]) {
      counts[item] = 1;
    } else {
      counts[item]++;
    }
  });

  // counts = { }

  const matchItemToCountArr = Object.entries(counts).map(([value, count]) => {
    const fruitObject = {};
    fruitObject[value] = { count: count };
    return fruitObject;
  });

  return matchItemToCountArr;
}

const outputArr = countItems(fruitsArray);
console.log(outputArr);

// Sort the matchItemToCountArr based on the count in descending order
const decreasingOrder = [...outputArr].sort((a, b) => b.count - a.count);
console.log(decreasingOrder);

const increasingOrder = [...outputArr].sort((a, b) => a.count - b.count);
console.log(increasingOrder);
