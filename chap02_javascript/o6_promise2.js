// CallBack Pattern of 3-stage overlaid 

function findAndSaveUser(Users) {
  Users.findOne( {}, (err, user) => {
    if (err) {
      return console.error(err);
    }
    user.name = 'john';
    user.save((err) => {
      if (err) {
        return console.error(err);
      }
      Users.findOne( { gender: 'm' }, (err, user) => {

      });
    })

  })
}


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