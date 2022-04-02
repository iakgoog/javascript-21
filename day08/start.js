(() => {
  // 1. Lexical scope & Dynamic scope
  // function printName() {
  //   console.log(this);
  // }
  // printName();
  // 2. How to know what is "this"?
  // function printName() {
  //   console.log(this);
  //   console.log(`My name is ${this.name}`);
  // }
  // // 2.1 Invoker object
  // const sutthinart = { name: 'Sutthinart', printName };
  // const ariya = { name: 'Ariya', printName };
  // sutthinart.printName();
  // ariya.printName();
  // // 2.2 Global object (window, global)
  // name = 'Global';
  // printName();
  // 2.3 Construction function
  // function Person(name) {
  //   this.name = name;
  //   this.printName = printName;
  // }
  // const sutthinart2 = new Person('Sutthinart');
  // sutthinart2.printName();
  // 3. call(), apply(), and bind()
  function printName(nationality, city) {
    console.log(this);
    console.log(
      `My name is ${this.name}, I'm ${nationality} and am living in ${city}`,
    );
  }

  function Person(name, nationality, city) {
    this.name = name;
    this.nationality = nationality;
    this.city = city;

    printName(this.nationality, this.city);
    printName.call(this, this.nationality, this.city);
    printName.apply(this, [this.nationality, this.city]);

    const printSutthinart = printName.bind(this);
    printSutthinart(this.nationality, this.city);
  }

  const sutthinart = new Person('Sutthinart', 'Thai', 'Chaing Mai');
})();
