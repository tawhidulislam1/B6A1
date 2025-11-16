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

const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
console.log(person2.getDetails());
