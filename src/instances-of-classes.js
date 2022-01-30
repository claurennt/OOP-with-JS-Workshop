import Movie from "./Movie.js";
import SciFi from "./SciFi.js";

const HomeAlone = new Movie("Home Alone", "Chris Columbus", 1990);
HomeAlone.createRating(6.4);

//console.log(HomeAlone);

const Inception = new SciFi("Inception", "Christopher Nolan", 2010, "Sci-Fi");
//console.log(Inception);
//console.log(Inception.getTitle());
//console.log(Inception.title);
Inception.genre = "Sci-Fi/Action";

//calling the static method of the parent's on the subclass
//console.log(SciFi.printSomething());
