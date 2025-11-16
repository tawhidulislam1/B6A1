// Problem 1
const formatValue = (
  input: string | number | boolean
): string | number | boolean => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return !input;
  }
};

// Problem 2

const getLength = (input: string | any[]): number => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
  return 0;
};

//? Problem 3

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

//? problem 4

type Item = {
  title: string;
  rating: number;
};
const filterByRating = (value: Item[]): Item[] => {
  return value.filter((book) => book.rating > 4);
};

//? problem 5

type Users = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (input: Users[]): Users[] => {
  const filter = input.filter((value) => value.isActive);
  return [...filter];
};

//? problem 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (input: Book): void => {
  console.log(
    `Title: ${input.title}, Author: ${input.author}, Published: ${
      input.publishedYear
    }, Available: ${input.isAvailable ? "Yes" : "No"}`
  );
};

//? problem 7

const getUniqueValues = (
  array1: (number | string)[],
  array2: (number | string)[]
): (number | string)[] => {
  const newArray: (number | string)[] = [];

  for (let i = 0; i < array1.length; i++) {
    let found = false;
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === array1[i]) {
        found = true;
      }
    }

    if (!found) {
      newArray.push(array1[i]);
    }
  }
  for (let i = 0; i < array2.length; i++) {
    let found = false;
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === array2[i]) {
        found = true;
      }
    }

    if (!found) {
      newArray.push(array2[i]);
    }
  }

  return newArray;
};

//? problem 7
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    const productTotal = product.price * product.quantity;
    const finalTotal = product.discount
      ? productTotal * (1 - product.discount / 100)
      : productTotal;
    console.log(productTotal);
    return total + finalTotal;
  }, 0);
};
const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
