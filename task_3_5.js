/*- Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома. Данный метод занести в прототип конструктора. Вызвать
данный метод на каждом созданном объекте и результат записать в поле totalArea каждого объекта*/

function HouseBuilder (length, width, level){
    this.lenght = length;
    this.width  = width;
    this.level = level;
    this.totalArea =  0;
    this.calcArea = function (){
        return this.totalArea = this.lenght*this.width*this.level;
    }
}

let firstHouse = new HouseBuilder(3,6,2);
firstHouse.calcArea();
let secondHouse = new HouseBuilder(9,12,1);
secondHouse.calcArea();