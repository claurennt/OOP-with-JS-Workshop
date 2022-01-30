import Movie from "./Movie.js";

class Director {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._movies = [];
  }
  getAllElements() {
    return this;
  }
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
  //check line 40 and 41
  set movies(value) {
    this._movies.push(value);
  }
  //check line 43 and 44
  addMovie(value) {
    this._movies.push(value);
  }
  get movies() {
    return this._movies;
  }
}

const pedroAlmodovar = new Director("Pedro", "Almodovar");
//console.log(PedroAlmodovar);

const allAboutMyMother = new Movie(
  "All About My Mother",
  "Pedro Almodovar",
  1999
);
const talkToHer = new Movie("Talk To Her", "Pedro Almodovar", 2002);
//console.log(AllAboutMyMother.getAllElements());
//console.log(TalkToHer.getAllElements());

pedroAlmodovar.movies = allAboutMyMother;
pedroAlmodovar.movies = talkToHer;

pedroAlmodovar.addMovie(talkToHer);
pedroAlmodovar.addMovie(allAboutMyMother);
//console.log(PedroAlmodovar.getAllElements());
//console.log(PedroAlmodovar.movies[0].getTitle());
