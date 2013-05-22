describe("A Project", function() {

  var project;

  beforeEach(function() {
    project = new app.models.Project({
      title: "My amazing test project",
      url: "http://example.org"
    });
  });

  it("should be able to retreive the title", function() {
    expect(project.get("title")).toEqual("My amazing test project");
  });

  it("should not have an id because its not persisted", function() {
    expect(project.id).toBeUndefined();
  });

  it("should have an cid", function() {
    expect(project.cid).not.toBe(null);
  });

  describe("Persistance in local storage", function() {
    beforeEach(function() {
      // Clear the database
      localStorage.clear();

      // Get an ID
      project.save();

      var ruby = new app.models.Skill({ name: 'Ruby', project_id: project.id });
      //ruby.save();
      var ajax = new app.models.Skill({ name: 'AJAX', project_id: project.id });
      //ajax.save();
      var skill_list = new app.collections.SkillList();
      skill_list.create(ruby);
      skill_list.create(ajax);

      project.fetch();

    });

    it("should have an id", function() {
      expect(project.id).not.toBe(null);
    });

    it("should have two skills in its collection", function() {
      var skills = project.getSkills();
      expect(skills.length).toEqual(2);
      expect(skills[0].attributes.name).toEqual("Ruby");
      expect(skills[1].attributes.name).toEqual("AJAX");
    });
  });

  describe("validation", function() {
    beforeEach(function() {
      project = new app.models.Project({
        title: "My amazing test project",
        url: ""
      });
    });

    it("should not be valid without a URL", function() {
      expect(project.isValid()).toBeFalsy();
    });
  });

});