require("dotenv").config();
// var spotify = new Spotify(keys.spotify);
// console.log(spotify)
var moment = require("moment");




var spotify = require("node-spotify-api");
var keys = require("./keys.js");
//using the node-spotify-api package on npm
//`node liri.js spotify-this-song '<song name here>'`

//* This will show the following information about the song in your terminal/bash window

//* Artist(s)
//* The song's name
//* A preview link of the song from Spotify
//* The album that the song is from
//* If no song is provided then your program will default to "The Sign" by Ace of Base.
//______________________________________________________________


var axios = require("axios");
//using the axios package on npm
// `node liri.js movie-this '<movie name here>'`

axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function (response) {
        console.log("the movie's rating is: " + response.data);
    })


//    * This will output the following information to your terminal/bash window:

//        * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Rotten Tomatoes Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.
//  If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
//______________________________________________________________



//using the fs node package
// `node liri.js do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.
//_______________________________________________________________