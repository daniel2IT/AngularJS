/* inicijuojam app,
2 parametris tuscias masyvas 
cotroller(kontrolerio pavadinimas, funkcija kuri bus aprasyta)
$scope -(kaip parametras funkcijoje), kad galima butu kazka isvesti i ekrana
*/
var app = angular.module('app', [] );

var bookmarks = [

    {
        id: 1,
        name: "ReactJS"
    },
    {
        id: 2,
        name: "AngularJS"
    }


];



app.directive("musuDirective", function(){

return{
    restrict: "E",
    templateUrl: "bookmarks.html",
    link: function (scope, element, attrs){
        console.log("directive");
        scope.bookmarks = bookmarks;
    }
};

});