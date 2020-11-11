/* inicijuojam app,
2 parametris tuscias masyvas 
cotroller(kontrolerio pavadinimas, funkcija kuri bus aprasyta)
$scope -(kaip parametras funkcijoje), kad galima butu kazka isvesti i ekrana
*/
angular.module('app', []).controller('myCtrl',function($scope){ 
/*viduje i sita kintamaji galima rasyti naujus property pvz: */
$scope.pirmas = "Pirmas Kontroleris";
$scope.antras = "Antras Kontroleris";
$scope.myBook = 'AngularJS';
});