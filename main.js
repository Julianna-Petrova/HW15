'use strict';

{
  const objA = {
    name: 'John',
    sayHi: function sayHi() {
      console.log(`Hello, ${this.name}!`);
    },
  };

  const objB = {
    name: 'Travolta',
    sayBye: function sayBye() {
      console.log(`Bye bye, ${this.name}!`);
    },
  };

  const objC = {
    name: 'Katya',
    sayHowAreYou: function sayHowAreYou() {
      console.log(`How are You, ${this.name}?`);
    },
  };

  objB.__proto__ = objA; // objB.setPrototypeOf(objA);
  objC.__proto__ = objB; // objC.setPrototypeOf(objB);

  console.log(objA);
  console.log(objB);
  console.log(objC);
}

{
  const objA = {
    name: 'John',
    sayHi: function sayHi() {
      console.log(`Hello, ${this.name}!`);
    },
  };

  const objB = Object.create(objA, {
    name: {
      value: 'Travolta',
    },
  });

  objB.sayBye = function sayBye() {
    console.log(`Bye bye, ${this.name}!`);
  };

  const objC = Object.create(objB, {
    name: {
      value: 'Katya',
    },
  });

  objC.sayHowAreYou = function sayHowAreYou() {
    console.log(`How are You, ${this.name}?`);
  };

  console.log(objA);
  console.log(objB);
  console.log(objC);
}

{
  const objA = {
    name: 'John',
    sayHi: function sayHi() {
      console.log(`Hello, ${this.name}!`);
    },
  };

  function ObjB(name) {
    this.name = name;
    this.sayBye = function sayBye() {
      console.log(`Bye bye, ${this.name}!`);
    };
  }

  ObjB.prototype = objA;
  const objB = new ObjB('Travolta');

  function ObjC(name) {
    this.name = name;
    this.sayHowAreYou = function sayHowAreYou() {
      console.log(`How are You, ${this.name}?`);
    };
  }

  ObjC.prototype = objB;
  const objC = new ObjC('Katya');

  console.log(objA);
  console.log(objB);
  console.log(objC);
}
