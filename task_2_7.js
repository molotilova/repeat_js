/*	- Создайте функцию-конструктор, которая позволяет создавать объект пользователя с полями first_name, second_name, age, city.
     С помощью данной функции создайте два объекта пользователей (два пользователя), имя, фамилию, возраст, город проживания задайте
     сами. */

function User(first_name, second_name, age, city){
    this.first_name = first_name;
    this.second_name = second_name;
    this.age = age;
    this.city = city;
}

let user1 = new User('Иван','Иванов', 25, 'Нью-Йорк');
let user2 = new User('Петр','Петров', 30, 'Кейптаун');