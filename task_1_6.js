/*- Создайте функцию avg() , которая будет находить среднее значение арифмитическое значение своих аргументов.*/


function avg() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (Number.isInteger(arguments[i])){
            sum += arguments[i];
        }
        else {
            return console.log('not a number');
        }
    }
    return sum/arguments.length;
}

console.log(avg(6,10));