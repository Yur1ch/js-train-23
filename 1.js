// Клас ContentContainer використовується для управління списком вкладених елементів контенту
class ContentContainer {
  constructor() {
    this.elements = [];
  }

  addElement(element) {
    this.elements.push(element);
  }

  removeElement(element) {
    const index = this.elements.indexOf(element);
    if (index !== -1) {
      this.elements.splice(index, 1);
    }
  }
}

// Клас Message, що є розширенням класу ContentContainer. Використовується для створення повідомлень з текстом.
class Message extends ContentContainer {
  constructor(content) {
    super();
    this.content = content;
  }

  display() {
    console.log(this.content);
  }
}

// Клас Article, що є розширенням класу ContentContainer. Використовується для створення статті з вкладеними елементами.
class Article extends ContentContainer {
  constructor(title) {
    super();
    this.title = title;
  }

  display() {
    console.log(`Стаття: ${this.title}`);
    this.elements.forEach((element) => {
      element.display();
    });
  }
}

console.log("Завдання 1 ====================================");

const article = new Article("Навчальна стаття");

article.addElement(new Message("Дуже корисна стаття"));
article.addElement(new Message("Дякую за чудовий матеріал!"));

const replyMessage = new Message("Відповідь: Згоден!");
article.elements[0].addElement(replyMessage);

article.display();

console.log(article.elements);

