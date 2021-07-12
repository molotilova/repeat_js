/*- Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 вы спустя dirtyLevel * 1000 мс возвращали выполненный
      с ошибкой промис. Для обработки неуспешной уборки в then используйте console.log(err). Где err это аргумент reject.
      Текст ошибки придумайте сами.*/
let dirtyLevel = 2;

function cleanRoom(dirtyLevel) {
    return new Promise(function (resolve, reject) {
        if (dirtyLevel < 11) {
            setTimeout(() => resolve(`Уборка проведена успешно за ${dirtyLevel} секунд`), dirtyLevel * 1000)
        } else {
            setTimeout(() => reject(`Уборка не проведена`), dirtyLevel * 1000)
        }
    });
}

cleanRoom(dirtyLevel).then((e) => console.log(e),(e) => console.log(e));