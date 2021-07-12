/*- Дан массив let arr = [1, "str", 24, {name: "Ivan"}, 89, undeifined, "10"]. Используя оператор расширение и
соответсвие порядка следования элементов запишите первые два элемента массива в переменные firstElement,
secondElement, число 89 (четвертый элемент массива) в переменную fifthElement. Остальные элементы
после 89 запишите в массив otherElements;*/

 let arr = [1, "str", 24, {name: "Ivan"}, 89, undefined, "10"];

    let firstElement = arr[0];
    let secondElement = arr[1];
    let fifthElement = arr[4];
    let otherElements = [...arr.splice(5, 2)];
    console.log(otherElements);