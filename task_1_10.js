/*- Написать функцию  sum(a, b), которая возвращает сумму переданных ей аргументов. Реализовать с помощью function declaration и с
	  помощью стрелочной функции. !!!Использовать цикл "for in" если это возможно.*/

let sSum = (a,b)=> a+b;

function sum(a,b) {
    return a+b;
}
console.log(sum(1,2));
console.log(sSum(2,3));