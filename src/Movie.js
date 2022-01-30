//Using classes, introduced with ES6
//They are templates for creating objects

export default class Movie {
  constructor(title, director, year) {
    /*underscore to show other developers 
    that these properties can be retrieved with 
    getters or changed with setters */
    this._title = title;
    this._director = director;
    this._year = year;
  }
  /*used as a function call, i.e. with parenthesis
  check line 11 in file instances-of-classes*/
  getTitle() {
    return this._title;
  }
  /*used the same way as dot.notation + assignment operator(=), 
  check line 12 in file instances-of-classes*/
  get title() {
    return this._title;
  }

  createRating(value) {
    this._rating = value;
  }
  getAllElements() {
    return this;
  }

  /*static functions are used when we don't need to use 'this' and 'new'.
they are accessible automatically on the class and its subclasses/children classes*/
  static printSomething() {
    return "Movies are cool!";
  }
}
