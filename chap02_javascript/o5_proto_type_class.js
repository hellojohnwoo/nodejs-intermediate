// Old Style
var Human = function(type) {
  this.type = type || 'human';
};

Human.isHuman = function(human) {
  return human instanceof Human;
}

Human.prototype.breathe = function () {
  alert('h-u-u-p');
};

var John = function(type, firstName, lastName) {
  Human.apply(this, arguments);
  this.firstName = firstName;
  this.lastName = lastName;
};


John.prototype = Object.create(Human.prototype);
John.prototype.constructor = John;
John.prototype.sayName = function() {
  alert(this.firstName + ' ' + this.lastName);
};
var oldJohn = new John('human', 'John', 'Woo');
Human.isHuman(oldJohn);   // true



// ES2015+ Style
class Human {
  constructor(type = 'human') {
    this.type = type;
  }

  static isHuman(human) {
    return human instanceof Human;
  }

  breathe() {
    alert('h-u-u-p');
  }
}


class John extends Human {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newJohn = new John('human', 'John', 'Woo');