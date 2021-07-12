
/*- Создать массив объектов для юзеров [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {name: ‘Pavel’, age: 24}, {name: ‘Sasha’, age: 29}]
Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними
 пользователями, второй с несовершеннолетними.
!Использовать метод filter. Полученные на выходе два массива отсортировать
(каждый из них в отдельности)
       по старшинству членов (от самого старшего к самому младшему).

       Расширить предыдущее задание так чтобы из исходного массива удалялись
        все несовершенолетние пользователи*/

const arr = [{name: 'Ivan', age: 18},
    {name: 'Petr', age: 12},
    {name: 'Sidor', age: 25},
    {name: 'Pavel', age: 24},
    {name: 'Sasha', age: 29},
    {name: 'Masha', age: 15}];


let AdultResult = arr.filter(arr => arr.age > 17).sort((a, b)=>a.age - b.age);
// console.log(AdultResult);
const NoAdultResult = arr.filter(arr => arr.age < 18).sort((a, b)=>a.age - b.age);
// console.log(NoAdultResult);

for (let i = 0; i < arr.length; i++ )
{
    if (arr[i].age < 18)
    {
        arr.splice(i,1);
    }
}
console.log(arr);