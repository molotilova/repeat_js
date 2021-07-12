/*- Посчитать с помощью рекурсии факториал числа 10. Например: factorial(n); (При выозове полжите n = 10);*/

function fact(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

console.log(fact(10));