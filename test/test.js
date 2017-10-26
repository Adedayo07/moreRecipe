var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8000");

// UNIT test begin

describe("Test GET endpoint",function(){

  // #1 should return home page

  it("should return all recipes",function(done){

    // calling home page api
    server
    .get("/api/recipes")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
});


describe("Test POST endpoint",function(){

  // #1 should return home page

  it("should add recipe",function(done){
    let recipe = {'Ice-cream': {
    'ingredients': ['condensed milk', 'coconut', 'whipped cream'],
    'upvotes': 35,
    'downvote': 5,
    'preparation': "Place sweetened condensed milk in the fridge to keep cold. Beat cold heavy cream on medium in a stand mixer fitted with the whisk attachment (or using a hand mixer) until stiff peaks form. Turn down the speed a little and pour the condensed milk into the whipped cream."
  }}
    // calling home page api
    server
    .post("/api/recipes")
    .send(recipe)
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
});



  describe("Test PUT endpoint",function(){

  // #1 should return home page

  it("It should modify a recipe",function(done){
  //   let recipe = {'Ice-cream': {
  //   'ingredients': ['condensed milk', 'coconut', 'whipped cream'],
  //   'upvotes': 35,
  //   'downvote': 5,
  //   'preparation': "Place sweetened condensed milk in the fridge to keep cold. Beat cold heavy cream on medium in a stand mixer fitted with the whisk attachment (or using a hand mixer) until stiff peaks form. Turn down the speed a little and pour the condensed milk into the whipped cream."
  // }}
    // calling home page api
    server
    .put("/api/recipes/Salmon")
    // .send(recipe)
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
});




  describe("Test DELETE endpoint",function(){

  // #1 should return home page

  it("It should delete a recipe",function(done){
  //   let recipe = {'Ice-cream': {
  //   'ingredients': ['condensed milk', 'coconut', 'whipped cream'],
  //   'upvotes': 35,
  //   'downvote': 5,
  //   'preparation': "Place sweetened condensed milk in the fridge to keep cold. Beat cold heavy cream on medium in a stand mixer fitted with the whisk attachment (or using a hand mixer) until stiff peaks form. Turn down the speed a little and pour the condensed milk into the whipped cream."
  // }}
    // calling home page api
    server
    .put("/api/recipes/Salmon")
    // .send(recipe)
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
})