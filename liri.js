// `concert-this`
// `spotify-this-song`
// `movie-this`
// `do-what-it-says`
require("dotenv").config();
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

const input = process.argv.slice(3).join(" ");
axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
  function (response) {
    if (process.argv[2] === "concert-this") {
      console.log("Venue: " + response.data[0].venue.name + "\nCity: " + response.data[0].venue.city +
        "\nDate: " + moment(response.data[0].daytime).format("MM//DD/YYYY") + "\n------------------------------------");
    }

  })

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

        console.log("Band: " + artistName + "\nSong: " + songTitle + "\nLink to this song: " +
          songUrl + "\nAlbum: " + songAlbum + "\n------------------------------------")
      }

    })
  if (input === "the sign") {
    spotify
      .request('https://api.spotify.com/v1/search?q=track:The+Sign&type=track&limit=1')
      .then(function (data) {
        for (let i = 0; i < data.tracks.items.length; i++) {
          const artistName = data.tracks.items[i].album.artists[0].name;
          const songTitle = data.tracks.items[i].name;
          const songUrl = data.tracks.items[i].preview_url;
          const songAlbum = data.tracks.items[i].album.name;

          console.log("Band: " + artistName + "\nSong: " + songTitle + "\nLink to this song: " +
            songUrl + "\nAlbum: " + songAlbum + "\n------------------------------------")

        }

      })
  }

}

//trying to get the default answer when no song is looked up
//changed the query to a request of the specific title
//changed the argument to include an empty string
// if (input === "the sign") {
//   spotify
//     .request('https://api.spotify.com/v1/search?q=track:The+Sign&type=track&limit=1')
//     .then(function (data) {
//       for (let i = 0; i < data.tracks.items.length; i++) {
//         const artistName = data.tracks.items[i].album.artists[0].name;
//         const songTitle = data.tracks.items[i].name;
//         const songUrl = data.tracks.items[i].preview_url;
//         const songAlbum = data.tracks.items[i].album.name;

//         console.log("Band: " + artistName + "\nSong: " + songTitle + "\nLink to this song: " +
//           songUrl + "\nAlbum: " + songAlbum + "\n------------------------------------")

//       }

//     })
// }


axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(
  function (response) {
    if (process.argv[2] === "movie-this") {
      console.log("Title: " + response.data.Title + "\nYear: " + response.data.Year + "\nIMDB Rating: " + response.data.imdbRating +
        "\nRotten Tomatoes Rating: " + response.data.tomatoRating + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language +
        "\nPlot: " + response.data.Plot + "\nCast: " + response.data.Actors + "\n------------------------------------");
    }

    //trying to get the default answer when no movie is looked up
    // if (input === "mr nobody") {
    //   console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/" + "\nIt's on Netflix!");
    // }
  })


//using file system (fs) node
// `node liri.js do-what-it-says`
if (command === "do-what-it-says") {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    // still need to change dataArr into a string
    //and turn that string into a search
    var dataArr = data.split(",");
    console.log(dataArr);
  });
}
