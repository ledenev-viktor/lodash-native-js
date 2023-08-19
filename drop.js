// Создает срез array с n-элементами, удаленными с самого начала.
const drop = (arr, n = 1) => arr.slice(n);

console.log(drop([1, 2, 3]));
// => [2, 3]

console.log(drop([1, 2, 3], 2));
// => [3]

console.log(drop([1, 2, 3], 5));
// => []

console.log(drop([1, 2, 3], 0));
// => [1, 2, 3]

const dropRight = (arr, n = 1) => arr.slice(0, -n || arr.length);

console.log(dropRight([1, 2, 3]));
// => [1, 2]

console.log(dropRight([1, 2, 3], 2));
// => [1]

console.log(dropRight([1, 2, 3], 5));
// => []

console.log(dropRight([1, 2, 3], 0));
// => [1, 2, 3]
