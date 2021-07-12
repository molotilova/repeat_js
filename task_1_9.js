/*- Есть функция function f(x) {
                  //Тело функции (ваш код здесь должен быть)
              }
        Научиться отличать отсутсвие аргументов у функции или то что первый аргумент undefined.
        Если аргментов нет то функция возвращает 0, если аргмент undefined то возвращает 0.
        Дополнительное задание: реализовать функцию function f(x) как стрелочную.
  */

let sF = (...x)=> {
    if (x.length){
        if (x[0] === undefined)
            return 0;
        else
            return true;
    }
    else return 0;
}




function f(x) {

    if (arguments.length){
        if (arguments[0] === undefined)
            return 0;
        else
            return true;
    }
    else return 0;
}
console.log(sF(undefined,1,2));