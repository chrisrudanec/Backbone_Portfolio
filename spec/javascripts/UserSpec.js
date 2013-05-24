describe("A User", function() {

  var user;

  beforeEach(function() {
    user = new app.models.User({
      first_name: 'Dan',
      last_name: 'Garland',
      image_url: 'uploads/me.jpg',
      bio: 'Freelance Ruby on Rails developer from London, UK',
      mission: 'Expressing creativity through innovative web development'
    });
  });

  it("should know how to print the entire name", function() {
    expect(user.full_name()).toEqual("Dan Garland");
  });

  describe("a User with some projects", function() {
    beforeEach(function() {
      user.save();

      var project = new app.models.Project({
        title: 'My Amazing Project'
      });

      user.projects.add(project);
    });

    it("should know which projects are what user", function() {
      expect(user.projects.length).toEqual(1);
    });
  });

});