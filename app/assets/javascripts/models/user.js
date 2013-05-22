app.models.User = Backbone.Model.extend({

  url: function() {
    return '/users/' + this.id;
  },

  full_name: function() {
    return this.attributes.first_name + " " + this.attributes.last_name;
  }

});