/* Отсортировать массив arr2 по убыванию. Посчитать сумму его эелементов.
   (Попробуйте использовать метод reduce в статье про методы есть его описание).*/
const arr = [4, 1, 10, 25, 67, 87, 56];
const arr1 = [2, 5, 90, 4]

const arr2 = arr.concat(arr1);

const index = arr2.indexOf(90);
arr2.splice(index, 1, 19, 2, 91 );
console.log('aar2 - '+arr2);
let arr3 = arr2.slice(arr2.length-4);

arr3.sort((a, b)=>a - b);
console.log(arr3);

arr2.sort((a, b)=> b - a );
console.log(arr2);

let result = arr2.reduce(function(sum, current) {
    return sum + current;
}, 0);
