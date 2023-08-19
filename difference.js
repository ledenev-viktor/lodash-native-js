// Создает массив arrayзначений, не включенных в другие заданные массивы.
const difference = (array1, array2) =>
  array1.filter((arg) => !array2.includes(arg));

console.log(difference([2, 1], [3, 2]));
// => [1]

const differenceBy = (array1, array2, iteratee) => {
  if (typeof iteratee === "string") {
    const prop = iteratee;
    iteratee = (item) => item[prop];
  }

  return array1.filter((arg) => array2.map(iteratee).includes(iteratee(arg)));
};

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
// => [1.2]

console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1, y: 5 }], "x"));
// => [{ 'x': 2 }]
