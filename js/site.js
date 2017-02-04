// Using the Giphy api, the idea of this srcipt is to return gifs based on a user input search term or a random gif
// Due to the Giphy api returning via trending, the call is built in such a way that each return returns 100 gif objects
// Then using a random number, shows one of the hundred to the user.

(function(){

	"use strict";

	$(function(){

		// This button runs a search on a search term that the user enters
		$("#buttonRegSearch").click(function(){

			// Gets a random number from 0 - 99
			var randomNum = parseInt(Math.random()*99);
			
			// Makes a variable that holds the user search term
			var searchQuery = $("#textboxSearchTerm").val();

			// The ajax call gets a gif from the Giphy api using the users search term
			$.ajax({
					type:"GET",
					dataType:"json",
					url:"http://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=dc6zaTOxFJmzC&limit=100", // This will call the api with the user search term and retun 100 responses.
					error: function(err){console.log(err);},
					success: function(response){

						// Makes the response into an array
						var arr = response;

						// Makes a variable that holds the url of the gif from the 100 that the api calls
						var gifURL = arr.data[randomNum].images.fixed_height.url;
						
						// Allows the results div to be populated
						$("#divSearchRetuns").append(

							//Makes a div which contains the gif image and a direct link to the gif 
							'<div class=divUserSearch><img src="' + gifURL + '" /><br /><span><a href="' + gifURL + '"</a>Link</span></div>'
						);
					}
			}); //End of AJAX call

		}); // End of buttonRegSearch

		// This button runs a search on a search term that the user enters
		$("#buttonRandomSearch").click(function(){

			// Gets a random number from 0 - 99
			var randomNum = parseInt(Math.random()*99);

			$.ajax({
					type:"GET",
					dataType:"json",
					url:"http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=100",
					error: function(err){console.log(err);},
					success: function(response){

						var arr = response;

						var gifURL = arr.data[randomNum].images.fixed_height.url;
					
						$("#divSearchRetuns").append(
							'<div class=divRandomSearch><img src="' + gifURL + '" /><br /><span><a href="' + gifURL + '"</a>Link</span></div>'
						);
					}
			});

		}); // End of buttonRandomSearch


		







		$("#test").click(function(){

			// Makes a new array
			var arrNew = new Array();
			
			for (var i = 0; i < 15; i++){

				var randomNum = parseInt(Math.random()*99);
				
				arrNew.push(randomNum);

				var randomNum = arrNew[i];

			}

			for (var j = 0; j < 15; j++) {

					$.ajax({
						type:"GET",
						dataType:"json",
						url:"http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=100",
						error: function(err){console.log(err);},
						success: function(response){

							var arr = response;

							var gifURL = arr.data[randomNum].images.fixed_height.url;
						
							$("#divSearchRetuns").append(
								'<div class=divRandomSearch><img src="' + gifURL + '" /><br /><span><a href="' + gifURL + '"</a>Link</span></div>'
							);
						}
					});
	
				}

			

		});
		
	}); // End of jQuery Self Invoked

})(); // End of Javascript Self Invoked