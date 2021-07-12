/*- Напишите функцию mul(n,m), которая принимает два аргумента и возвращает
	  произведение этих аргументов. Проверьте ее работу.*/

let n = 2;
let m = 5;

function mul(n,m){
    if (Number.isInteger(n) && Number.isInteger(m))
    return n*m;
    else console.log('non');
}

console.log(mul(n,m));