console.log('javascript sourced');

var myApp = angular.module('myApp', []);

myApp.controller('readyController', function(){
  console.log('angular sourced');
});
