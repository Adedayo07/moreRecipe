var supertest = require("supertest");
var should = require("should");
var app = require("../app");

describe("Test GET endpoint",function(){
  it("should return all recipes",function(done){

    supertest(app)
    .get("/api/recipes")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
});


describe("Test POST endpoint",function(){
  it("should add recipe",function(done){
    let recipe = {'Ice-cream': {
    'ingredients': ['condensed milk', 'coconut', 'whipped cream'],
    'upvotes': 35,
    'downvote': 5,
    'preparation': "Place sweetened condensed milk in the fridge to keep cold. Beat cold heavy cream on medium in a stand mixer fitted with the whisk attachment (or using a hand mixer) until stiff peaks form. Turn down the speed a little and pour the condensed milk into the whipped cream."
  }}
    supertest(app)
    .post("/api/recipes")
    .send(recipe)
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
});

  describe("Test PUT endpoint",function(){
  it("It should modify a recipe",function(done){
    supertest(app)
    .put("/api/recipes/Salmon")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
});

  describe("Test DELETE endpoint",function(){
  it("It should delete a recipe",function(done){
    supertest(app)
    .delete("/api/recipes/Salmon")
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      res.error.should.equal(false);
      done();
    });
  });
})