var candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy: function () {
    this.status.count--;
    return this.status.count;
  },
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;


// ES2015+ Style
const candyMachine2 = {
  status: {
    name: 'New Node',
    count: 2015,
  },
  getCandy: function () {
    this.status.count--;
    return this.status.count;
  },
};
const { getCandy, status: { count } } = candyMachine2;