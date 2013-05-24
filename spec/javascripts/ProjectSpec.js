describe("A Project", function() {

  var project;
  var user;

  beforeEach(function() {
    spyOn($, 'ajax');
    user = new app.models.User({
      id: 1,
      first_name: 'Dan',
      last_name: 'Garland',
      image_url: 'uploads/me.jpg',
      bio: 'Freelance Ruby on Rails developer from London, UK',
      mission: 'Expressing creativity through innovative web development'
    });

    project = new app.models.Project({
      title: "My amazing test project",
      url: "http://example.org"
    });
    project.user = user;
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
      user.projects.create(project);

      var ruby = new app.models.Skill({ name: 'Ruby', project_id: project.id });
      var ajax = new app.models.Skill({ name: 'AJAX', project_id: project.id });
      project.skills.add(ruby);
      project.skills.add(ajax);
      project.save();
    });

    it("should generate JSON for projects and skills", function() {
      var json = '{"project":{"title":"My amazing test project","url":"http://example.org"},"skills_attributes":[{"name":"Ruby"},{"name":"AJAX"}]}';
      expect($.ajax.mostRecentCall.args[0]["url"]).toEqual("/users/1/projects");
      expect($.ajax.mostRecentCall.args[0]["data"]).toEqual(json);
    })
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