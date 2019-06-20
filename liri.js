// `concert-this`
// `spotify-this-song`
// `movie-this`
// `do-what-it-says`
require("dotenv").config();
var moment = require("moment");
var axios = require("axios");

var Spotify = require("node-spotify-api");
var keys = require("./keys.js");




var spotify = new Spotify(keys.spotify);
const command = process.argv[2];
const song = process.argv.slice(3).join(" ");
if (command === "spotify-this") {

  spotify
    .request('https://api.spotify.com/v1/search?q=track:' + song + '&type=track&limit=1')
    .then(function (data) {
      for (let i = 0; i < data.tracks.items.length; i++) {
        const artistName = data.tracks.items[i].album.artists[0].name;
        const songTitle = data.tracks.items[i].name;
        const songUrl = data.tracks.items[i].preview_url;
        const songAlbum = data.tracks.items[i].album.name;
        // console.log(data.tracks)
        //* Artist(s)
        console.log("Band: " + artistName);
        //* The song's name
        console.log("Song: " + songTitle);
        //* A preview link of the song from Spotify
        console.log("Link to this song: " + songUrl);
        //* The album that the song is from
        console.log("Album: " + songAlbum);
        console.log("\n------------------------------------");
      }
      
    })
}
// * If no song is provided then your program will default to "The Sign" by Ace of Base.
if (command === "spotify-this" + (process.argv[3] === " ")) {
  spotify
    .request('https://api.spotify.com/v1/search?q=track:The+Sign&type=track&limit=1')
    .then(function (data) {
      for (let i = 0; i < data.tracks.items.length; i++) {
        const artistName = data.tracks.items[i].album.artists[0].name;
        const songTitle = data.tracks.items[i].name;
        const songUrl = data.tracks.items[i].preview_url;
        const songAlbum = data.tracks.items[i].album.name;
        // console.log(data.tracks)
        //* Artist(s)
        console.log("Band: " + artistName + "\nSong: " + songTitle)
        //* The song's name
        console.log( + "Song: " + songTitle);
        //* A preview link of the song from Spotify
        console.log( + "Link to this song: " + songUrl)
        //* The album that the song is from
        console.log("Album: " + songAlbum)
        console.log("\n------------------------------------")
      }

    })
}

var input = process.argv.slice(3).join(" ");
axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(
  function (response) {
    if (process.argv[2] === "movie-this") {
      console.log("Title: " + response.data.Title + "\nYear: " + response.data.Year + "\nIMDB Rating: " + response.data.imdbRating +
        "\nRotten Tomatoes Rating: " + response.data.tomatoRating + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language +
        "\nPlot: " + response.data.Plot + "\nCast: " + response.data.Actors);
    }

  })

  //trying to get the default answer when no movie is looked up
  //changed the query to a request of the specific title
  //changed the argument to include an empty string
axios.get("https://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy").then(
  function (response) {
    if (process.argv[2] === "movie-this" + (process.argv[3] === " ")) {
      console.log("Title: " + response.data.Title + "\nYear: " + response.data.Year + "\nIMDB Rating: " + response.data.imdbRating +
        "\nRotten Tomatoes Rating: " + response.data.tomatoRating + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language +
        "\nPlot: " + response.data.Plot + "\nCast: " + response.data.Actors);
    }

  })



//using the fs node package
// `node liri.js do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.
//_______________________________________________________________