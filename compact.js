// Создает массив, в котором удалены все ложные значения. Значения false, null, 0, "", undefined, и NaNявляются ложными.

const compact = (array) => {
  return array.filter((arg) => !!arg);
};

console.log(compact([0, 1, 2, false, undefined, null]));
