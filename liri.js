require("dotenv").config();
// var spotify = new Spotify(keys.spotify);
// console.log(spotify)
var moment = require("moment");
var axios = require("axios");
// `concert-this`
// `spotify-this-song`
// `movie-this`
// `do-what-it-says`



var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
//using the node-spotify-api package on npm
//`node liri.js spotify-this-song '<song name here>'`

var spotify = new Spotify(keys.spotify);
const command = process.argv[2];

if (command === "spotify-this") {
  const song = process.argv.slice(3).join(" ");
  spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occured: ' + err)
    }
    for(let i = 0; i < data.tracks.items.length; i++) {
      const artistName = data.tracks.items[i].album.artists[0].name;
      const songTitle = data.tracks.items[i].name;
      const songUrl = data.tracks.items[i].preview_url;
      const songAlbum = data.tracks.items[i].album[i];
      // console.log(data.tracks)
      //* Artist(s)
      console.log("Band: " + artistName)
      //* The song's name
      console.log("Song: " + songTitle);
      //* A preview link of the song from Spotify
      console.log("Link to this song: " + songUrl)
      //* The album that the song is from
      console.log("Album: " + songAlbum)
      console.log("\n------------------------------------")
    }
    //* If no song is provided then your program will default to "The Sign" by Ace of Base.
    if (process.argv[3] === ""){
      spotify.search({ type: 'track', query: 'The Sign', limit: 1 }, function(err, data){
        if (err) {
          return console.log('Error occured: ' + err)
        }
        for(let i = 0; i < data.tracks.items.length; i++) {
          const artistName = data.tracks.items[i].album.artists[0].name;
          const songTitle = data.tracks.items[i].name;
          const songUrl = data.tracks.items[i].preview_url;
          const songAlbum = data.tracks.items[i].album[i];
          console.log("Band: " + artistName)
          console.log("Song: " + songTitle);
          console.log("Link to this song: " + songUrl)
          console.log("Album: " + songAlbum)
          console.log("\n------------------------------------")
        }
      })
      
    }


  });
  
}


//using the axios package on npm

// `node liri.js movie-this '<movie name here>'`

var input = process.argv.slice(3).join(" ");
axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(
  function (response) {

    if (process.argv[2] === "movie-this") {
      //          Title of the movie.
      console.log(response.data.Title);
      //          Year the movie came out.
      console.log( + response.data.Year);
      //          IMDB Rating of the movie.
      console.log( + response.data.imdbRating);
      //          Rotten Tomatoes Rating of the movie.
      console.log( + response.data.tomatoRating);
      //          Country where the movie was produced.
      console.log( + response.data.Country);
      //          Language of the movie.
      console.log( + response.data.Language);
      //          Plot of the movie.
      console.log( + response.data.Plot);
      //          Actors in the movie.
      console.log( + response.data.Actors);
    }
    //  If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    // else {
    //     axios.get("http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&tomatoes=true&apikey=trilogy").then(
    //         function (response) {
    //             console.log(response.data.Title);
    //             console.log(response.data.Year);
    //             console.log(response.data.imdbRating);
    //             console.log(response.data.tomatoRating);
    //             console.log(response.data.Country);
    //             console.log(response.data.Language);
    //             console.log(response.data.Plot);
    //             console.log(response.data.Actors);
    //         })
    // }
  })



//using the fs node package
// `node liri.js do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.
//_______________________________________________________________