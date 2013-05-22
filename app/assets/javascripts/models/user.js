app.models.User = Backbone.Model.extend({

  urlRoot: '/user',

  full_name: function() {
    return this.attributes.first_name + " " + this.attributes.last_name;
  }

});