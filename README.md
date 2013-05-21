# Backbone Portfolio

A little app we'll use to make a front-end rich client experience, that builds
an on-line portfolio to show off our project work.

## INSTALL

* Fork and clone this repo as per usual.
* Open in your favourite browser, using a scheme such as
file:///Users/yournamehere/projects/backbone_portfolio/public/index.html

Note that there is no rails server!

## TESTS

To run the tests, visit the jasmine script runner in your browser:

    file:///Users/yournamehere/projects/backbone_portfolio/SpecRunner.html


## TODO

* Create a User model that represents yourself.
  * Create keys for name, bio, image URL and mission.
* Add validation for the model and test that it works using Jasmine TDD
* Instantiate your user in the application.js
* Update the index.html to include the bio section in a script tag, and create a User view that replaces the values with the information in your model.
* Add events to the project view, so that you can edit all of the project features in place, and store the changes in the local store. Make sure you add some nice UX features such as fadeIn and fadeOuts, and ensure that if I click away from a text box that the value will not update.
* Create a model called Skill, with a name attribute. Add validation and tests.
* Create a collection of Skill models called Skills, and nest it within the project model. Ensure that a hard-coded set of skills dynamically appears in your project template.
* Create a SkillView for each skill in a project. Add events to allow you to dynamically add and remove a skill to a project that persists to the local store.
* Add an event to the project trashcan so that you can delete a project.
* Add code to the page so that the sorting arrow works and you can update the order of the projects.
* Amend the project model to add any other information that you see fit.
* Personalise your portfolio with CSS.

## TODO 21/05

* Refactor your application to use templates, backed by a rails application. You'll need one controller that renders your index page, updating the asset pipeline, including EJS and breaking the script templates into seperate files
* Add a router to the application so that you have the following routes:

| URL | Action | Purpose |
|:----------|:-----------|:-----------|
| ' ' | 'home' | Display a funky homepage with a list of users currently in the system |
| '/users:id' | 'userShow' | Display the bio page of a given user, with a list of their recent projects |

* Update the homepage so that it dynamically shows all users in the system, with links so that when I click on a link, I see the project details, skills and biography for a given user.

# TIPS

* Add the ProjectList collection to the User model, so that I can pull out the projects related to that User
* Refactor the app so that all of the code that displays and handles events for a particular project is in a 'partial' rendered by the main ProjectView page
* The router is the thing that should be attaching the output of the views to the DOM
* Each view's render() function should return this, so that you can decide when / how to render it
* IN A BRANCH add your rails application using ```rails new . -d postgresql -J -T```
* Commit little chnages often so that you can see changes when things go wrong
* Have some setup code in your init.js to get some inital users in the localStorage, which you can comment out as needed.
* Don't cut+paste / merge this code. Really.
