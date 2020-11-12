/* inicijuojam app,
2 parametris tuscias masyvas 
cotroller(kontrolerio pavadinimas, funkcija kuri bus aprasyta)
$scope -(kaip parametras funkcijoje), kad galima butu kazka isvesti i ekrana
*/
var app = angular.module('app', []);

app.controller('myBooksController'
  ,function($scope){

    $scope.showBook = function(){
      console.log("This is Parent Method log");
    };

});

app.controller('angularBookController'
  ,function($scope){

    $scope.showBook = function (){
      console.log('This is AngularChildBook Method log');
    };

});

app.controller('emberBookController'
  ,function($scope){
 /* showBook metodas cia neaprasytas,
 bet kaip matome paveldi is Parento*/
 
 /* KAIP tai vyksta? 
  Is pradziu Angular ziuri ar tas metodas
  neaprasytas cia ....Jeigu ne.
  tai jis ziuri auksciau ir paima is ten */

 /*Tai mums leidzia atgauti logika,
 aukciau aprasytame atvejyje keliems
 Childams*/
});