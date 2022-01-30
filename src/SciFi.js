import Movie from "./Movie.js";

export default class SciFi extends Movie {
  /*the constructor and super syntax are necessary in the child class only 
  if you you want to add more functionality to your child instance*/
  constructor(title, director, year, genre) {
    super(title, director, year);

    /*underscore symbolizes a protected property, 
    a property that should not be tampered with directly*/
    this._genre = genre;
  }

  //method to get a property
  getTitle() {
    return this._title;
  }
  //method to update a property, can take more than one arg
  setTitle(value) {
    this._title = value;
  }

  //getter syntax to retrieve a given property
  get genre() {
    return this._genre;
  }
  /*setter syntax to modify a given property, but 
  they are not that flexible because they can take only one arg*/
  set genre(value) {
    this._genre = value;
  }

  createRating(value) {
    /*we are calling the parent's method using the super,
    because we want to add something to the parent's method*/
    super.createRating(value);
    return this._rating > 7
      ? `${this._title} is definitely worth watching`
      : `${this._title} is not the best movie out there`;
  }
}
