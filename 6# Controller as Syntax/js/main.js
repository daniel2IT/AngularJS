/* inicijuojam app,
2 parametris tuscias masyvas 
cotroller(kontrolerio pavadinimas, funkcija kuri bus aprasyta)
$scope -(kaip parametras funkcijoje), kad galima butu kazka isvesti i ekrana
*/
var app = angular.module('app', []);

app.controller('mainController', function($scope){

this.myLessonForMethod = "Lesson Only for MusuAs1";

this.addLesson = function(){
  console.log('addLesson');
}; 

$scope.mainController = this; /* Ta pati realizacija As 
sintakses, bet jau su Kontrolerio Vardu musu atveju 
tai mainController */
}); /* END */

app.controller('ChildController', function(){

  this.myLessonForMethod22222 = "Lesson Only for MusuAs2"; 

}); /* END */

app.controller('ChildChildController', function(){

  this.myLessonForMethod = "Lesson Only for MusuAs3";

}); /* END */