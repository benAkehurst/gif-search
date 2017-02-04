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
						$("#divSearchRetuns").html(

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
					
						$("#divSearchRetuns").html(
							'<div class=divRandomSearch><img src="' + gifURL + '" /><br /><span><a href="' + gifURL + '"</a>Link</span></div>'
						);
					}
			});
		}); // End of buttonRandomSearch

		// This button runs a call to get 15 random gifs from the top trending gifs
		$("#buttonGet15Gifs").click(function(){

			// Makes a new array
			var arrNew = new Array();
			
			// This loop fills the new array with 15 random numbers from 0 - 99
			for (var i = 0; i < 15; i++) {
			
				var randomNum = parseInt(Math.random()*99);
				
				arrNew.push(randomNum);

				var randomNum = arrNew[i];
			
			}
				
			// In the ajax call, 15 random gifs are called from the trending and placed in the container div
			$.ajax({
				type:"GET",
				dataType:"json",
				url:"http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=100",
				error: function(err){console.log(err);},
				success: function(response){

				var arr = response;
								
				var gifURL0 = arr.data[randomNum].images.fixed_height.url;
				var gifURL1 = arr.data[randomNum+1].images.fixed_height.url;
				var gifURL2 = arr.data[randomNum+2].images.fixed_height.url;
				var gifURL3 = arr.data[randomNum+3].images.fixed_height.url;
				var gifURL4 = arr.data[randomNum+4].images.fixed_height.url;
				var gifURL5 = arr.data[randomNum+5].images.fixed_height.url;
				var gifURL6 = arr.data[randomNum+6].images.fixed_height.url;
				var gifURL7 = arr.data[randomNum+7].images.fixed_height.url;
				var gifURL8 = arr.data[randomNum+8].images.fixed_height.url;
				var gifURL9 = arr.data[randomNum+9].images.fixed_height.url;
				var gifURL10 = arr.data[randomNum+10].images.fixed_height.url;
				var gifURL11 = arr.data[randomNum+11].images.fixed_height.url;
				var gifURL12 = arr.data[randomNum+12].images.fixed_height.url;
				var gifURL13 = arr.data[randomNum+13].images.fixed_height.url;
				var gifURL14 = arr.data[randomNum+14].images.fixed_height.url;


				$("#divSearchRetuns").html(
					
					'<div class=divRandom15><img src="' + gifURL0 + '" /><br /><a href="' + gifURL0 + '"</a>Link</div>' +
					
					'<div class=divRandom15><img src="' + gifURL1 + '" /><br /><a href="' + gifURL1 + '"</a>Link</div>' +
					
					'<div class=divRandom15><img src="' + gifURL2 + '" /><br /><a href="' + gifURL2 + '"</a>Link</div>' +
					
					'<div class=divRandom15><img src="' + gifURL3 + '" /><br /><a href="' + gifURL3 + '"</a>Link</div>' +
					
					'<div class=divRandom15><img src="' + gifURL4 + '" /><br /><a href="' + gifURL4 + '"</a>Link</div>' +

					'<div class=divRandom15><img src="' + gifURL5 + '" /><br /><a href="' + gifURL5 + '"</a>Link</div>' +
					
					'<div class=divRandom15><img src="' + gifURL6 + '" /><br /><a href="' + gifURL6 + '"</a>Link</div>' +
					
					'<div class=divRandom15><img src="' + gifURL7 + '" /><br /><a href="' + gifURL7 + '"</a>Link</div>' +
					
					'<div class=divRandom15><img src="' + gifURL8 + '" /><br /><a href="' + gifURL8 + '"</a>Link</div>' +
					
					'<div class=divRandom15><img src="' + gifURL9 + '" /><br /><a href="' + gifURL9 + '"</a>Link</div>' +
					
					'<div class=divRandom15><img src="' + gifURL10 + '" /><br /><a href="' + gifURL10 + '"</a>Link</div>' +
					
					'<div class=divRandom15><img src="' + gifURL11 + '" /><br /><a href="' + gifURL11 + '"</a>Link</div>' +
					
					'<div class=divRandom15><img src="' + gifURL12 + '" /><br /><a href="' + gifURL12 + '"</a>Link</div>' +
					
					'<div class=divRandom15><img src="' + gifURL13 + '" /><br /><a href="' + gifURL13 + '"</a>Link</div>' +
					
					'<div class=divRandom15><img src="' + gifURL14 + '" /><br /><a href="' + gifURL14 + '"</a>Link</div>'

				);

				}
			});

			// When you load the random 15, you get a button fading in that will allow the page to auto scroll back to the top
			$("#backToTop").fadeIn('slow', function() {});
		}); // End of buttonGet15Gifs

		// This button auto scrolls the page to the top
		$("#backToTop").click(function(){
			$('html, body').animate({
            	scrollTop: $(".container-fluid").offset().top
            }, 1000);
		});
		
	}); // End of jQuery Self Invoked

})(); // End of Javascript Self Invoked