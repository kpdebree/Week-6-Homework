$(document).ready(function(){

	var giphies = [
	"doge", "kitten", "cat", "dog", "pusheen", "daschund", "puppy", "hotline bling", "panda"]

	var api_key = "V4z9F4UVJ7hDZGf4jvuf4lpbmazhfcEH"

	var base_url = "http://api.giphy.com/v1/gifs/search?q="

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
			url: queryURL
			method: "GET"
		})
		.done(function(response) {
			var results = response.data;

			for (i = 0; i < results.length; i++) {
				var giphyDiv = $("<div class\"giphy-item\">");
			}




		})








	})





	generateButtons(giphies, "giphy-button", "#button-container");

});