$(document).ready(function() {

  // Create some dummy users
  // var me = new app.models.User({
  //   first_name: "Corey",
  //   last_name: "Trombley",
  //   image_url: '/uploads/corey.jpg',
  //   bio: 'Well ard coder from NYC',
  //   mission: 'Complete level 12 on Bomberman and save the world from itself'
  // });
  // me.save();

  // var me = new app.models.User({
  //   first_name: "Dan",
  //   last_name: "Garland",
  //   image_url: '/uploads/me.jpg',
  //   bio: 'Jolly coder from London',
  //   mission: 'Learn to teach '
  // });
  // me.save();

  var router = new app.Router();
  Backbone.history.start({pushState: true});
  router.navigate('');
});