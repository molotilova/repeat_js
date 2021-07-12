/*- Создайте функцию-конструктор houseBuilder, которая позволяет создавать объект дачного дома с параметрами ширины длины и количества этажей.
      Создайте два объекта firstHouse и secondHouse на основании этой функции конструктора. (Длина, ширина, количество этажей - числовой тип данных,
      значения придумайте сами). */

function HouseBuilder (lenght, width, level){
    this.lenght = lenght;
    this.width  = width;
    this.level = level;
}

let firstHouse = new HouseBuilder(3,6,2);
let secondHouse = new HouseBuilder(9,12,1);