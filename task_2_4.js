/*- Посчитать первые 8 чисел Фибоначчи использую рекурсию. Например: fibonachi(n); (При вызове функции положите n = 8); */

function fibonachi(n) {
    if (n === 1 || n===2) {
        return 1;
    } else {
        return fibonachi(n - 1)+fibonachi(n - 2);
    }
}

console.log(fibonachi(8));