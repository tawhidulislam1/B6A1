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
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
