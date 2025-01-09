console.log('Hello!');
// 1. Transform the given array of objects into an object using .reduce().

const data = [
  { key: 'item', value: 'Pencil' },

  { key: 'price', value: 250 },

  { key: 'inStock', value: true },
];

const intoObj = data.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(intoObj);
// Output: { item: 'Pencil', price: 250, inStock: true }

// 2. Convert the given array of objects into an array of colors using .reduce().

const students = [
  { item: 'Pen', color: 'blue' },

  { item: 'Pen', color: 'black' },

  { item: 'Pen', color: 'red' },
];
const intoArr = students.reduce((acc, curr) => {
  acc.push(curr.color);
  return acc;
}, []);
console.log(intoArr);
// Output: [ 'blue', 'black', 'red' ]

// 3. Convert the given array of objects into an array of cities using .reduce().

const countries = [
  { item: 'Car', manufacturingCity: 'New York' },

  { item: 'Car', manufacturingCity: 'Los Angeles' },

  { item: 'Car', manufacturingCity: 'Chicago' },
];
const citiesArr = countries.reduce((acc, curr) => {
  acc.push(curr.manufacturingCity);
  return acc;
}, []);
console.log(citiesArr);
// Output: [ 'New York', 'Los Angeles', 'Chicago' ]

// 4. Convert the given array of objects into an array of fruits using .reduce().

const groceryItems = [
  { item: 'Fruit', name: 'Apple' },

  { item: 'Fruit', name: 'Banana' },

  { item: 'Fruit', name: 'Orange' },
];
const fruitsArr = groceryItems.reduce((acc, curr) => {
  acc.push(curr.name);
  return acc;
}, []);
console.log(fruitsArr);
// Output: [ 'Apple', 'Banana', 'Orange' ]

// 5.  Transform the given array of objects into an object using .reduce()

const details = [
  { key: 'category', value: 'Electronics' },

  { key: 'rating', value: 4.5 },

  { key: 'available', value: true },
];
const aoobj = details.reduce((acc, curr) => {
  acc[curr.key] = curr.value;
  return acc;
}, {});
console.log(aoobj);
// Output: { category: 'Electronics', rating: 4.5, available: true }
