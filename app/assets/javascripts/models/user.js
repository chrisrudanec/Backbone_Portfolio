app.models.User = Backbone.Model.extend({

  full_name: function() {
    return this.attributes.first_name + " " + this.attributes.last_name;
  }

});