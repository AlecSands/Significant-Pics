// Sourced javascript
console.log('javascript sourced');


// Create and array with paths to my images
var myImages = [];

function Image(name, path, description) {
  this.name = name;
  this.path = path;
  this.description = description;
  this.likes = 0;
  myImages.push(this);
}

var columbiaMarket = new Image('Columbia Market', 'pictures/Columbia1.jpg', 'Visiting a farmers market in Columbia.');
var columbiaStatue = new Image('Columbia Statue', 'pictures/Columbia2.jpg', 'Impersonating a statue in Columbia.');
var starwars = new Image('Starwars', 'pictures/starwars.png', 'Concept art for Starwars by Ralph McQuarrie.');
var switzerland = new Image('Switzerland', 'pictures/Switzerland2.jpg', 'Climbing the Swiss Alps with my girlfriend.');
var architecture = new Image('Architecture Concept Art', 'pictures/arch.png', 'Concept drawings for on of my architecture projects.');
var warcraft = new Image('Warcraft', 'pictures/warcraft3b.jpg', 'Warcraft 3 - My favorite game of all time.');

console.log(myImages);
// End of creating images array


// Sourcing angular
var myApp = angular.module('myApp', []);

// Create Angular controller
myApp.controller('readyController', function(){
  console.log('angular sourced');
});
// End of Angular controller
