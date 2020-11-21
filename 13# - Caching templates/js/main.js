var app = angular.module('app', [] );
/*Pries Angular starta pirmas 
kas pasileis tai app.run */
app.run(function($templateCache){
    /* priima (id, htmlPart) */
$templateCache.put("bookmarks.html","<div ng-repeat='bookmark in bookmarks'>" +
    "{{bookmark.name}}</div>")
});
/* labai patogu pries starta Kesuoti duomenis, kad 
nebutu taip, kad kelis kartus imami/isgrebiami butu*/ 
app.directive("musuDirective", function($templateCache){

var BOOKMARKS = [
{
    id: 1,
    name: "Array1"
},
{
    id: 2,
    name: "Array2"
},
{
    id: 3,
    name: "AngularJS"
}];

return{
    restrict: "E",
    /* cia jau jisai matys kad duotas irasas
    yra Cache ir is ten ims ...o ne is Ajax Uzklausos*/
    templateUrl: "bookmarks.html",
    link: function(scope,element,attr){
        scope.bookmarks = BOOKMARKS;
        console.log($templateCache.info());
    }
  };
}); /* End of musuDirective */