class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get gender() {
    return this._gender;
  }

  set name(value) {
    if (typeof value !== "string") {
      throw Error("Invalid Name");
    }
    this._name = value;
  }

  set email(value) {
    let validation =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validation.test("value")) {
      this._email = value;
    } else {
      throw Error("Invalid Email");
    }
  }

  set gender(value) {
    if (value === "male" || value === "female") {
      this._gender = value;
    } else {
      throw Error("Invalid Gender");
    }
  }

  toString() {
    if (this._gender === "male") {
      console.log(`Mr. ${this._name}`);
    } else if (this._gender === "female") {
      console.log(`Ms. ${this._name}`);
    }
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }

  set title(value) {
    if (typeof value !== "string") {
      throw Error("Invalid title!");
    }

    this._title = value;
  }

  set author(value) {
    if (typeof value !== "string") {
      throw Error("Invalid author name!");
    }

    this._author = value;
  }

  set price(value) {
    if (typeof value !== "number") {
      throw Error("Invalid price value!");
    }

    this._price = value;
  }

  set quantity(value) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw Error("Invalid quantity value!");
    }

    this._quantity = Math.trunc(value);
  }

  getProfit() {
    return this.price * this.quantity;
  }

  toString() {
    return `${this.author}: ${this.title}`;
  }
}

let hexinak1 = new Author("Narek", "krptnrkrptnrk@gmail.com", "male");
console.log(hexinak1.email);

//hexinak1.name = 123;

let girq1 = new Book("ayo", "vardan", 25, 400);
console.log(girq1.getProfit());

console.log(girq1.toString());

girq1.quantity = "a";
