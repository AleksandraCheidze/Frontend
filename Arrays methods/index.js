// Задание 1
// У вас есть массив объектов:
// Создайте на основе старого массива новый массив объектов по образу:
//  [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const cars2 = cars.map(car => ( {
    brand:car.brand,
    isDiesel: car.isDiesel}))

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.

const carsDiesel = cars.filter((car) => car.isDiesel === true);

// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.
    

const carsNoDiesel = cars.filter((car) => car.isDiesel === false);

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.

const totalNoDieselCarPrice = cars
.filter(car => !car.isDiesel)
.reduce((acc, car) => acc + car.price, 0);

// Задание 5
// Повысьте цену всех машин в массиве на 20%.

cars.forEach((car) => car.price *= 1.2)

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на 
// { brand: "Tesla", price: 25000, isDiesel: false }

const newCars = cars.map ((car) => {
if (car.isDiesel === true){
    return {brand: "Tesla", price: 25000, isDiesel: false }
}
return{...car}
})

// Задание 7
// Управление списком задач

// У вас есть список задач, и вы хотите добавить, удалить и извлечь задачи из этого списка 
// с использованием методов splice() и slice().

// Создайте начальный массив toDoList, который будет содержать несколько задач.

// Используя метод splice(), добавьте новую задачу в середину списка (воспользуйтесь 
// третьим опциональным параметром) mdn

// С помощью метода slice(), создайте копию списка задач на определенный период времени
//  (например, "Сегодняшние задачи").

// Используя метод splice(), удалите одну из задач из списка.
// Выведите в консоль исходный список задач и результаты изменений.

const toDoList = ["полить цветы", "покормить собаку", "погладить кота "];

toDoList.splice (2, 0, "забыть зайти в тик-ток");

const todayTasks = toDoList.slice (-1);
console.log(todayTasks);

toDoList.splice (4, 1);

console.log(toDoList);


