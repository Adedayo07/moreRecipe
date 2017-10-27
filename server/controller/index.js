const recipes = {
	'Ice-cream': {
		'name': 'Ice-cream',
		'ingredients': ['condensed milk', 'coconut', 'whipped cream'],
		'upvotes': 35,
		'downvote': 5,
		'preparation': "Place sweetened condensed milk in the fridge to keep cold. Beat cold heavy cream on medium in a stand mixer fitted with the whisk attachment (or using a hand mixer) until stiff peaks form. Turn down the speed a little and pour the condensed milk into the whipped cream."
	},

	'Indian-potato': {
		'name': 'Indian-potato',
		'ingredients':["Black Chana with Potato", "turmeric", "tomato", "cucumber", "Kachumbar", "tamarind sauce fish curry"],
		'upvotes': 28,
		'downvotes': 6,
		'preparation':"Black Chana with Potato. , {turmeric, and cumin in this classic, Tomato Cucumber Kachumbar, Red Split Lentils (Masoor Dal), coconut Chutney, Tamarind Sauce Fish Curry"
	},	


	'Salmon': {
		'name': 'Salmon',
		'ingredients':['salmon', 'lemon juice', 'gaelic', 'melted butter', 'salt', 'pepper', 'oregano', 'red pepper flakes'],
		'upvotes': 20,
		'downvotes': 7,
		'preparation':"Preheat oven to 375 degrees F. Line a baking sheet with foil, In a small bowl, add lemon juice, garlic and melted butter, Place salmon onto prepared baking sheet, Pour the butter mixture over the salmon, Season with salt, pepper, oregano, and red pepper flakes, Fold the sides of the foil over the salmon"
	},


	'Sandwich': {
		'name': 'Sandwich',
		'ingredients':['salmon', 'mayonnaise', 'celery', 'lemon zest', 'black pepper', 'lettuce leaves', 'bread'],
		'upvotes': 31,
		'downvotes': 8,
		'preparation': "Heat oven to 450° F. Roast the salmon fillet on a rimmed baking sheet until cooked through, 6 to 8 minutes; let cool, then flake, Combine the smoked salmon, mayonnaise, celery, chives, capers, lemon zest, flaked salmon, and ¼ teaspoon pepper in a medium bowl then divide the salmon salad and lettuce leaves among the bread."
	}

}
				
 module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send({
     message: 'Welcome to the moreRecipes API!',
   }));
 
   // list all recipes
   app.get('/api/recipes', (req, res) => {
		var recipesList = [];
		// convert recipes object to list
		Object.keys(recipes).forEach((key) => {
			recipesList.push(recipes[key])
		})

		if (req.query.sort === 'upvotes') {
			// sort recipes by ascending order of upvotes
			recipesList.sort((a, b) => {
				return a.upvotes - b.upvotes
			});
		}
		res.status(200).send({
			message: recipesList
		});
 	})
 

    // create a recipe
 	app.post('/api/recipes', (req, res) => {
 		recipes[req.body.name] = req.body
	   	res.status(200).send({
	     	message: ['recipe added successfully', recipes]
	   	});
 	})

 	// get a recipe
 	app.get('/api/recipes/:recipeId', (req, res) => {
	   	res.status(200).send({
	     	message: recipes[req.params.recipeId]
	   	});
 	})
 
 	// edit a recipe
 	app.put('/api/recipes/:recipeId', (req, res) => {
 		recipes[req.params.recipeId] = req.body
	   	res.status(200).send({
	     	message: ['recipe updated successfully', recipes]
	   	});
 	})

 	// delete a recipe
 	app.delete('/api/recipes/:recipeId', (req, res) => {
 		delete recipes[req.params.recipeId]
 		res.status(200).send([{message:'recipe deleted successfully'}, recipes])
 	})
 }

