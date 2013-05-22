app.collections.ProjectList = Backbone.Collection.extend({

  model: app.models.Project,
  url: '/projects'

});