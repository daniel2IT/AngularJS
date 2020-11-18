/* inicijuojam app,
2 parametris tuscias masyvas 
cotroller(kontrolerio pavadinimas, funkcija kuri bus aprasyta)
$scope -(kaip parametras funkcijoje), kad galima butu kazka isvesti i ekrana
*/
var app = angular.module('app', []);

app.directive('musuDirective', function() {

    var bookmarks = [{
            id: 1,
            name: "AngularJS"
        },
        {
            id: 2,
            name: "EmberJS"
        },
        {
            id: 3,
            name: "ReactJS"
        }
    ];

    return {
        template: "<b>Hello World</b> <i>{{name}}</i><br>" +
            "<div ng-repeat='bookmark in myBookmarks'>{{bookmark.name}}</div>",
        /* template  atsakingas uz tai kas parasyta 
        direktivos viduje */
        link: function(scope, element, attrs) {
            console.log("TESTUOJAM");
            scope.name = "Daniel";

            scope.myBookmarks = bookmarks;
        } /* End of link */
         
    }; /*End of return*/
}); /* End Of app.directive */