const arr = ['apple', 'banana', 'cherry', 'date'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
let password = '';

for (let i = 0; i < 8; i++) {
  const randomIndex = Math.floor(Math.random() * chars.length);
  password += chars[randomIndex];
}

console.log(password);

const person = { name: "Aibek", age: 25, country: "Kyrgyzstan" };

const { name, age } = person;

console.log(name);
console.log(age);

const car1 = { brand: 'Nissan', year: 2003 };
const car2 = { brand: 'Toyota', year: 2005 };

const newCar = { ...car1, ...car2 };

console.log(newCar);

const values = [10, "hello", 25, "world", 30, false, 50, "JS"];

const numbers = values.filter(item => typeof item === 'number');

console.log(numbers);
