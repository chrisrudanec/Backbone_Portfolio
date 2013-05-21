app.Router = Backbone.Router.extend({

  routes: {
    '' : 'home',
    'users/:id' : 'userShow'
  },

  home: function() {
    var view = new app.views.Home();
    $('#content').html(view.render().el);
  },

  userShow: function() {
    var view = new app.views.ProjectView();
    $('#content').html(view.render().el);
  }

});