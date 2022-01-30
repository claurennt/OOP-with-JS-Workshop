//basic structure of an object
const newObject = { key: "value" };

//different ways of creating an object on JS

//1. Basic way with curly braces and key/value pair-called Object Literal
const myConsole = { log: (text) => console.log(text) };

//to add new properties to a basic object we have dot notations and bracket notations
//dot notation
myConsole.type = "object";

//brackets notations,supports multiple words, characters different from _ and alphabet
myConsole["the data type"] = "object";
myConsole["%"] = 100;
//console.log(myConsole);

//2. Using Object.create()
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
const matrix1Object = {
  title: "The Matrix",
  director: "The Wachowskis"
};

//the first argument is the prototype that we use in order to create the new object instance
const matrix2Object = Object.create(matrix1Object);

//dot notations or brackets notation to create new properties or overwrite existing ones
matrix2Object.title = "The Matrix Reloaded";
//console.log(matrix2Object);

//3.Using Object.assign()
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const matrix3Object = {
  title: "The Matrix Revolutions",
  year: 2003
};

const directorObject = {
  "director's name": "The Wachowskis"
};
const newMatrixObject = Object.assign({}, matrix3Object, directorObject);

//console.log(newMatrixObject);
const newMatrix2Object = Object.assign(matrix2Object, directorObject);
const newMatrix3Object = Object.assign(matrix3Object, directorObject);
//console.log(newMatrix2Object);
//console.log(newMatrix3Object);

//const newMatrix3Object = Object.assign(matrix2Object, matrix3Object);
//console.log(newMatrix3Object);

//matrix2Object = { directorObject, ...matrix2Object };
//matrix2Object = { ...matrix2Object, directorObject };
//const spreadObj = { matrix3Object, ...matrix2Object };

const objSpreadAppend = { ...matrix2Object, matrix3Object };
const objSpreadPrepend = { matrix3Object, ...matrix2Object };
//console.log(objSpreadAppend);
//console.log(objSpreadPrepend);

//4. Using a constructor function and the new keyword
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
}
//add methods
Movie.prototype.createRating = function (value) {
  this.rating = value;
};

//creating an instance of an object
const HomeAlone = new Movie("Home Alone", "Chris Columbus", 1990);
HomeAlone.createRating(6.4);

const HomeAlone2 = new Movie("Home Alone2", "Chris Columbus", 1992);
HomeAlone2.createRating(6.8);
// console.log(HomeAlone);
// console.log(HomeAlone2);

const Inception = new Movie("Inception", "Christopher Nolan", 2010);
Inception.createRating(8);

//console.log(Inception);
//5.Using classes
