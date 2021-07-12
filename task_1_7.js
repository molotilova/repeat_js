/*- Напишите функцию words(n), которая в зависимости от переданного в нее целочисленного аргумента n, будет выводить слово «товар»
	  в нужно форме («12 товаров», но «22 товара»). По умолчанию аргумент n должен иметь значение 0.*/

const a = prompt('Введите значение:','0');
const n = Number(a);

function  words(n) {

    let n1 = Math.abs(n) % 100;
    let num = n1 % 10;
    if(n1 > 10 && n1 < 20) return console.log(n+' товаров');
    if(num > 1 && num < 5) return console.log(n+' товара');
    if(num == 1) return console.log(n+' товар');
    return console.log(n+' товаров');
}

words(n);