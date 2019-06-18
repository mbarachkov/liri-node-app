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

var movie = process.argv.slice(3).join(" ");
axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(
    function (response) {

        if (process.argv[2] === "movie-this") {
            //          Title of the movie.
            console.log(response.data.Title);
            //          Year the movie came out.
            console.log(response.data.Year);
            //          IMDB Rating of the movie.
            console.log(response.data.imdbRating);
            //          Rotten Tomatoes Rating of the movie.
            console.log(response.data.tomatoRating);
            //          Country where the movie was produced.
            console.log(response.data.Country);
            //          Language of the movie.
            console.log(response.data.Language);
            //          Plot of the movie.
            console.log(response.data.Plot);
            //          Actors in the movie.
            console.log(response.data.Actors);
        }
        //  If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
        else {
            axios.get("http://www.omdbapi.com/?t=Mr+Peabody&y=&plot=short&tomatoes=true&apikey=trilogy").then(
                function (response) {
                    console.log(response.data.Title);
                    console.log(response.data.Year);
                    console.log(response.data.imdbRating);
                    console.log(response.data.tomatoRating);
                    console.log(response.data.Country);
                    console.log(response.data.Language);
                    console.log(response.data.Plot);
                    console.log(response.data.Actors);
                })
        }
    })



//using the fs node package
// `node liri.js do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.
//_______________________________________________________________