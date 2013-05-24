app.models.Project = Backbone.Model.extend({

  urlRoot: function() {
    var url = '/users/' + this.user.id + '/projects';
    // if(!this.isNew()) {
    //   url += '/' + this.id;
    // }
    return url;
  },

  initialize: function() {
    this.skills = new app.collections.SkillList();
    this.skills.model = app.models.Skill; // Don't know why but this worked
  },

  validate: function() {
    if(this.attributes.url === "") {
      return "Argh!";
    }
  },

  getSkills: function() {
    this.skills.fetch();
    return this.skills.where({ project_id : this.id });
  },

  toJSON: function() {
    json = { project : this.attributes };
    skills_attributes = [];
    this.skills.forEach(function(skill) {
      skills_attributes.push(skill.toJSON());
    });

    return _.extend(json, { skills_attributes: skills_attributes });
  }

});