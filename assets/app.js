$(document).ready(function(){

	var giphies = [
	"doge", "kitten", "cat", "dog", "pusheen", "daschund", "puppy", "hotline bling", "panda", "eminem", "rick and morty", "get schwifty", "mr. poopy butthole", "south park"]

	var api_key = "&api_key=dc6zaTOxFJmzC&limit=10";

	var base_url = "https://api.giphy.com/v1/gifs/search?q=";

	var queryURL;
	var category;

	var tempButton;



	function generateButtons(temparray, tempclass, tempcontainer) {

		$(tempcontainer).empty();
		console.log(tempclass)
		console.log(temparray)
		console.log(tempcontainer)

		for (i = 0; i < temparray.length; i++) {

			//Sets Temp button for style
			tempButton = $("<button>")

			//adds class to tempbuttom
			tempButton.addClass(tempclass);

			tempButton.attr("data-type", temparray[i]);

			tempButton.text(temparray[i]);

			//Creates buttons
			$(tempcontainer).append(tempButton);

		}
	}

	$(document).on("click", ".giphy-button", function(){


		//clears container of old giphies
		$("#giphy-container").empty();

		//resets buttons
		$(".giphy-button").removeClass("active");
		$(this).addClass("active");

		category = $(this).attr("data-type");
		var queryURL = base_url + category + api_key
		console.log(queryURL)


		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.done(function(response) {
			var results = response.data;
			console.log(results)

			for (i = 0; i < results.length; i++) {
				var giphyDiv = $("<div class='item'>");

				console.log(giphyDiv)
				var rating = results[i].rating;
				var p = $("<p>").text("Rating: " + rating);
				var giphy_image = $("<img>");

				var animated_state = results[i].images.fixed_height.url;
				var still_state = results[i].images.fixed_height_still.url;

				giphy_image.attr("src", still_state);
				giphy_image.attr("data-still", still_state);
				giphy_image.attr("data-animate", animated_state);
				giphy_image.attr("data-state", "still_state");
				giphy_image.addClass("giphy-image")

				giphyDiv.append(p);
				giphyDiv.append(giphy_image);

				$("#giphy-container").append(giphyDiv);
			}
		});
	});


	//Animate Giphies
	$(document).on("click", ".giphy-image", function(){

		var state = $(this).attr("data-state");


		if(state === "still_state") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animated_state");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still_state");
      }

	});

$("#submit-button").on("click", function(event) {


    event.preventDefault();


    var newGiphy = $("input").val().trim();

    if (newGiphy.length > 2) {


      giphies.push(newGiphy);


    }

    generateButtons(giphies, "giphy-button", "#button-container");

  });




	generateButtons(giphies, "giphy-button", "#button-container");

});