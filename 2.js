class Group {
  static #groups = {};

  constructor(name) {
    this.name = name;
  }

  static create(name) {
    if (!Group.#groups[name]) {
      Group.#groups[name] = new Group(name);
    }
    return Group.#groups[name];
  }
}

class Product {
  constructor(name, group) {
    this.name = name;
    this.group = group;
  }

  display() {
    console.log(`Продукт: ${this.name}, Група: ${this.group.name}`);
  }
}

console.log("Завдання 2 ====================================");

const electronics = Group.create("Електроніка");
const books = Group.create("Книги");
const electronics2 = Group.create("Електроніка");

console.log(electronics, books, electronics2);
console.log(electronics === electronics2);

const product1 = new Product("Ноутбук", electronics);
const product2 = new Product("Навушники", electronics);
const product3 = new Product("Воно", books);
const product4 = new Product("Смартфон", Group.create("Електроніка"));

product1.display();
product2.display();
product3.display();
product4.display();

console.log(product1.group === product4.group);

const list = [product1, product2, product3, product4].filter(
  (product) => product.group === Group.create("Електроніка")
);

console.log(list);
