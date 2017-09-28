$(document).ready(function(){

	var giphies = [
	"doge", "kitten", "cat", "dog", "pusheen", "daschund", "puppy", "hotline bling", "panda"]

	var api_key = "V4z9F4UVJ7hDZGf4jvuf4lpbmazhfcEH"

	var base_url = "http://api.giphy.com/v1/gifs/search?q="



	function generateButtons(temparray, tempclass, tempcontainer) {

		$(tempcontainer).empty();

		for (i = 0; i < temparray.length; i++) {


			var tempButton = $("<button>")

			tempButton.addClass(tempclass);

			tempButton.attr("data-type", temparray[i]);

			tempbutton.text(temparray[i]);

			$(tempcontainer).append(tempButton);

		}
	}



});