/*-- Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений строки str.
	  n — по умолчанию 2, str — пустая строка.*/


function repeat(str  =  '', n = 2) {
    return str.repeat(n);
}

console.log(repeat('qwerty', 2));