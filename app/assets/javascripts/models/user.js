app.models.User = Backbone.Model.extend({

  localStorage: new Backbone.LocalStorage('portfolio-user'),

  full_name: function() {
    return this.attributes.first_name + " " + this.attributes.last_name;
  }

});