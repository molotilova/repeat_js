/*- Создайте функцию, которая позовляет вывести полную информацию о каждом из двух пользователей созданных в предыдущем задании.
     Функция должна выполнять вывод информации и не принимать аргументов. По сути нужно одну функцию привязать два объекта. */
function User(first_name, second_name, age, city){
    this.first_name = first_name;
    this.second_name = second_name;
    this.age = age;
    this.city = city;
}

let user1 = new User('Иван','Иванов', 25, 'Нью-Йорк');
let user2 = new User('Петр','Петров', 30, 'Кейптаун');


User.prototype.print = function (){
    console.log(this.first_name, this.second_name, this.age, this.city);
}
user1.print();
user2.print();