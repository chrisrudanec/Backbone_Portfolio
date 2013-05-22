app.collections.SkillList = Backbone.Collection.extend({

  model: app.models.Skill,
  localStorage: new Backbone.LocalStorage('portfolio-skills')

});