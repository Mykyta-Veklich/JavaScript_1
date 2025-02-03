//ЗАВДАННЯ 1: Зарплати, які перевищують 3000$.

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 10;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//  const salary = Math.round(
//    Math.random() * (maxSalary - minSalary) + minSalary
//  );
//     if (salary > 3000) {
//     console.log(`ЗП працівника номер ${i}: ${salary}$`);
//  totalSalary += salary;
// }
// }

// console.log(`Загальна сума зарплат: ${totalSalary}$`);
//
//
//
//ЗАВДАННЯ 2: Середня зарплата працівників

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 10;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//  const salary = Math.round(
//    Math.random() * (maxSalary - minSalary) + minSalary
//  );

//  console.log(`ЗП працівника номер ${i}: ${salary}$`);
//  totalSalary += salary;
// }
// const averageSalary = totalSalary / employees;

// console.log(`Загальна сума зарплат: ${totalSalary}$`);
// console.log(`Середня зарплата: ${averageSalary}$`);
//
//
//
//ЗАВДАННЯ 3: Введення кількості працівників через prompt()

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = prompt("Введіть кількість працівників");
// console.log("Кількість працівників:", employees);
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//  const salary = Math.round(
//    Math.random() * (maxSalary - minSalary) + minSalary
//  );

//  console.log(`ЗП працівника номер ${i}: ${salary}$`);
//  totalSalary += salary;
// }

// console.log(`Загальна сума зарплат: ${totalSalary}$`);
//
//
//
//ЗАДАЧА: Підрахунок суми парних чисел у діапазоні

let start = Number(prompt("Введіть початкове число"));
let end = Number(prompt("Введіть кінцеве число"));

if (start > end) {
    [start, end] = [end, start];
    console.log("Числа було змінено місцями (некоректна умова)");
} else {
    if (isNaN(start) || isNaN(end)) {
        console.log("Помилка! Введіть тільки числа.")
    }
}
let sum = 0;

console.log("Парні числа:");
for (let i = start; i <= end; i += 1){
    if (i % 2 === 0) {
        sum += i;
        console.log(i);
    }
}
console.log(`Сума парних чисел у діапазоні [${start};${end}] = ${sum}`);