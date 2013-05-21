app.views.Home = Backbone.View.extend({

  template: JST['templates/home'],

  events: {
    'click .user-link' : 'showUser'
  },

  render: function() {
    this.$el.html(this.template());

    // Find all the users in the system
    var users = new app.collections.UserList();
    users.fetch();

    // Add a <li> element containing a link to each profile page
    var _this = this;
    users.forEach(function(user) {
      _this.$el.find("#users").append("<li><a href='#' class='user-link' data-id='" + user.id + "'>" + user.full_name() + "</a></li>");
    });
    return this;
  },

  showUser: function() {
    event.preventDefault();
    var id = $(event.target).data("id");
    new app.Router().navigate('/users/' + id, {trigger: true});
  }

});