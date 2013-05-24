app.models.Project = Backbone.Model.extend({

  url: function() {
    var url = '/users/' + this.user.id + '/projects';
    if(!this.isNew()) {
      url += '/' + this.id;
    }
    return url;
  },

  initialize: function() {
    this.skills = this.skills || new app.collections.SkillList();
    this.skills.model = app.models.Skill; // Don't know why but this worked
  },

  validate: function() {
    if(this.attributes.url === "") {
      return "Argh!";
    }
  },

  parse: function(response) {
    var skills_json = response.skills;
    //response.skills = new app.collections.SkillList(skills_json);
    this.skills = new app.collections.SkillList(skills_json);
    return response;
  },

  toJSON: function() {
    var sa = [];
    this.skills.forEach(function(skill) {
      sa.push({ id: skill.get("id"), name: skill.get("name")});
    });

    var json = { project : _.extend(this.attributes, { 'skills_attributes': sa }) };

    delete json.project.skills;
    return json;
  }

});