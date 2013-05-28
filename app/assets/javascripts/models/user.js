app.models.User = Backbone.Model.extend({

  urlRoot: '/users',

  initialize: function() {
    this.projects = new app.collections.ProjectList();
    this.projects.url = '/users/' + this.id + '/projects';
    this.projects.on("reset", this.updateCounts);

    this.followers = new app.collections.UserList();
    this.followers.url = '/users/' + this.id + '/followers';
    this.followers.on("reset", this.updateCounts);
  },

  full_name: function() {
    return this.attributes.first_name + " " + this.attributes.last_name;
  },

  toJSON: function() {
    var follower_ids = [];
    this.followers.forEach(function(follower) {
      follower_ids.push(follower.get("id"));
    });
    var json = { user : _.extend(this.attributes, { 'follower_ids' : follower_ids})};
    return json;
  }

});