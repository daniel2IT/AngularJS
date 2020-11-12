/* inicijuojam app,
2 parametris tuscias masyvas 
cotroller(kontrolerio pavadinimas, funkcija kuri bus aprasyta)
$scope -(kaip parametras funkcijoje), kad galima butu kazka isvesti i ekrana
*/
var app = angular.module('app', []);

app.controller('firstController', 
 function($scope, myFactory){

  $scope.hello = "hello Controller Methos";
  
  /*metodas iskeviamas su () kaip funkcija*/
  $scope.getBookmark = function(){
  	return "My bookmark";
  };

  /* Metodas su priimancia reiksme */
  /* ir keis musu kintamali hello kaip text reiskme */
  $scope.setHello = function(text){
	$scope.hello = text;
  };

  /* Factory */
	$scope.myFactory = myFactory;  
}); /* Vienas kontroleris */

app.factory('myFactory', function(){
	return{
		hello: function(){
			return "hello i am Factory";
		}		
	}
});