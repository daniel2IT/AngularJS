/* inicijuojam app,
2 parametris tuscias masyvas 
cotroller(kontrolerio pavadinimas, funkcija kuri bus aprasyta)
$scope -(kaip parametras funkcijoje), kad galima butu kazka isvesti i ekrana
*/
var app = angular.module('app', []);

app.controller("manoControlleris", function($scope){

$scope.name = "AngularJS"

});

app.directive("tamTikraDirective", function(){

return{
    restrict: "E", /*Works by element: <restriction-example-bar> */
    transclude: true,
    template: "This is my superDirective </br>", /* tas dalykas iskvies tai
    kas buvo sablono viduje musu atveju tai (Tekstas) */
    /* ctrl - kontroleris, transclude - transclude */ 
    link: function(scope,element,attrs, ctrl, transclude){
        console.log("This is my super directive");
        /* Clone - tai tekstas kuris bus vizualizuojamas 
        ekrane musu atveju tai "Tai yra {{name}}" 
        Scope - skirtas matomumui aprasytam "{{name}}"
        Element - paima direktiva, musu atveju, tai sablonas 
        "This is my superDirective </br>"
        Ir gale appendinamas jo Klonas, tai 
        "Tai yra {{name}}"
        */
        transclude(scope, function(clone, scope) {
            console.log('!', clone, scope);
            element.append(clone);
        });
        
    } /* End of Link */

}; /*End of Return*/
}); /* End of app.directive */