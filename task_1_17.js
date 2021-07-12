/*- В измененном массиве arr2 извлечь последние 4 элемента с конца и записать их в массив arr3. Сам массив arr2 не должен
	  измениться (извлеченные из него эелементы должны в нем остаться). Массив arr3 осортировать по возрастанию.*/
const arr = [4, 1, 10, 25, 67, 87, 56];
const arr1 = [2, 5, 90, 4]

const arr2 = arr.concat(arr1);

const index = arr2.indexOf(90);
arr2.splice(index, 1, 19, 2, 91 );
console.log('aar2 - '+arr2);
let arr3 = arr2.slice(arr2.length-4);

arr3.sort((a, b)=>a - b);
console.log(arr3);