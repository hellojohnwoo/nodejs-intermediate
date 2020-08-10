var relationship1 = {
  name: 'john',
  friends: ['anna', 'cathy', 'nicole'],
  logFriends: function () {
    var that = this;    // that, self, _this
    this.friends.forEach(function (friend) {    // parent's 'this' != child's 'this' NOT SAME
      console.log(that.name, friend);           // that = this
    });
  },
};
relationship1.logFriends(); 


var relationship2 = {
  name: 'john',
  friends: ['anna', 'cathy', 'nicole'],
  logFriends() {
    this.friends.forEach(friend => {      // parent's 'this' = child's 'this' SAME
      console.log(this.name, friend);
    });
  },
};
relationship2.logFriends();



button.addEventListener('click', function () {
  console.log(this.textContent);
});


button.addEventListener('click', () => {
  console.log(this.textContent);          // Not Working
});

this;
button.addEventListener('click', () => {
  console.log(this.textContent);
});

this;
button.addEventListener('click', function () {    // 'this' oneself
  console.log(this.textContent);
});


this;
button.addEventListener('click', (e) => {
  console.log(e.target.textContent);    
});

this;
button.addEventListener('click', function(e) {
  console.log(this.textContent);    
});

