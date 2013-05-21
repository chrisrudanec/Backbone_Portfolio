app.Router = Backbone.Router.extend({

  routes: {
    '' : 'home',
    'user/:id' : 'userShow'
  },

  home: function() {
    var view = new app.views.Home();
    view.render();
  },

  userShow: function() {
    // Try to find projects already in the local storage
    var projectList = new app.collections.ProjectList();
    projectList.fetch();

    // Create a blank project for us to fill in.
    projectList.add({
      title: "New Project",
      url: "Click to edit",
      body: "Click to edit"
    });

    projectList.forEach(function(project) {
      var view = new app.views.ProjectView({ model: project });
      $('#project-list').append(view.render().el);
    });

    var me = new app.models.User({
      first_name: "Corey",
      last_name: "Trombley",
      image_url: 'uploads/corey.jpg',
      bio: 'Well ard coder from NYC',
      mission: 'Complete level 12 on Bomberman and save the world from itself'
    });

    new app.views.UserView({
      model: me
    }).render();
  }

});