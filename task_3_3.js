/*- Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого
 есть все элементы входных массивов.
     Например:
 var arrays = [[1, 2, 3], [4, 5], [6]];
 // Ваш код тут
 // → [1, 2, 3, 4, 5, 6]	*/

let arrays = [[1, 2, 3], [4, 5], [6]];
let arr_result = [];
arr_result = arrays.reduce((accumulator, currentValue)=> accumulator.concat(currentValue), []);

console.log(arr_result);