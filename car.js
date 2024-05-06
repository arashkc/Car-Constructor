class Car {
  constructor(name, model, year, color) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  // Show full name with Age
  printFullInfo() {
    let age = new Date().getFullYear() - this.year;
    console.log(
      `We have a ${this.color} ${this.name}, ${this.model}, that is ${age} years old`
    );
  }
}

export default Car;
