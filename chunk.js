// Создает массив элементов, разбитых на группы длиной size. Если arrayнельзя разделить поровну, последним фрагментом будут оставшиеся элементы.
const chunk = (array, chunkSize = 0, cache = []) => {
  const tmp = [...array];

  if (chunkSize < 0) return cache;

  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};

console.log(chunk(["a", "b", "c", "d", "e", "f", "g"], 2, ["1", "2", "3"]));
// => [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]
