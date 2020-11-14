/* inicijuojam app,
2 parametris tuscias masyvas 
cotroller(kontrolerio pavadinimas, funkcija kuri bus aprasyta)
$scope -(kaip parametras funkcijoje), kad galima butu kazka isvesti i ekrana
*/
var app = angular.module('app', []);

app.controller("mainController",function($scope){
 
 $scope.money = "244";

});

/* Filtras leidzia keisti bet kokia reiksme i kitokia */ 
app.filter("moneyFilter", function(){

	return function(str){
		console.log("str", str); /* str = money */
		return 500; /* pakeitimas tuo eilutes reiksmes */
	};
});

/* Difficult Example */
app.controller("hardController", function($scope){

	$scope.money1 = "1.20$";
	$scope.money2 = "$1.30";
	$scope.money3 = "1.40";

});

app.filter("hardFilter", function(){

	return function(str){
		var lastChar = str.slice(-1), /* Paskutinis */
			firstChar = str.slice(0, 1), /* Pirmas */
			slicePart; /* Nukerptas */
/* str.slice(0, str.length - 1); visi raides isskyrus
paskutinio */
			if(lastChar === "$"){
				slicedPart = str.slice(0, str.length - 1);
				return "$" + slicedPart;
			} else if(firstChar === "$"){
				return str;
			}else{
				return "$" + str;
		   }
	};
});