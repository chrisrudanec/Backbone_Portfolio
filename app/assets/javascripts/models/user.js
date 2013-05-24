app.models.User = Backbone.Model.extend({

  urlRoot: '/users',

  initialize: function() {
    this.projects = new app.collections.ProjectList();
    this.projects.url = '/users/' + this.id + '/projects';
    this.projects.on("reset", this.updateCounts);
  },

  full_name: function() {
    return this.attributes.first_name + " " + this.attributes.last_name;
  }

});