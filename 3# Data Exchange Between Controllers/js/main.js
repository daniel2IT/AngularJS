/* inicijuojam app,
2 parametris tuscias masyvas 
cotroller(kontrolerio pavadinimas, funkcija kuri bus aprasyta)
$scope -(kaip parametras funkcijoje), kad galima butu kazka isvesti i ekrana
*/
var app = angular.module('app', []);

app.controller('firstController', function($scope, myFactory){
console.log('firstController');

$scope.myFactoryFirst = myFactory; /* Kad butu matomas */
$scope.hello = "hello world";
});

app.controller('secondController', function($scope, myFactory){
	console.log('secondController');
	$scope.myFactorySecond = myFactory;
	$scope.hello = 'hello world';
});

/* Fabrika - subjektas savyje saugo duomenys kurias mes 
galima kazkur naudoti kelis kartus */
/* Fabrika su vardu my Factory */
/* savyje turinti Metoda hello */
/* kuris aprasytas kaip hello world */
app.factory('myFactory', function(){
	return{
		helloImFactory:'hello I am your Factory'
	};
});