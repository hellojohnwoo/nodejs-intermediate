// The OOP style code requires an understanding of the 'prototype(class)'.
// Function-based vs. Class-based(OOP)

// Neatly condensed code style
async function findAndSaveUser(Users) {
  let user = await Users.findOne( { } );          // Execute way : Left <- Right
  user.name = 'john';
  user = await user.save();
  user = await Users.findOne( { gender: 'm' } );
  // ...
}

// * tips!) const result = await promise;  (O : working) // 'Top-Level await'


// The code style that used to overdo '.then'.
function findAndSaveUser2(Users2) {
  Users2.findOne2( {} )
    .then((user2) => {
      user2.name = 'kanna';
      return user2.save();
    })
    .then((user2) => {
      return Users2.findOne2( { gender: 'm' } );
    })
    .then((users2) => {

    })
    .catch(err => {

    })

}