/* inicijuojam app,
2 parametris tuscias masyvas 
cotroller(kontrolerio pavadinimas, funkcija kuri bus aprasyta)
$scope -(kaip parametras funkcijoje), kad galima butu kazka isvesti i ekrana
*/
var app = angular.module('app', []);

app.directive('restrictionExampleBar', function(){
/* by defaul uses EA */
  return { 
    restrict: 'EACM',
    link: function(){
      console.log("Veikia");
    }
  };

});/* End of app.directive */  

app.directive('restrictionExampleBar', function(){
  
  return { 
    restrict: 'C',
    link: function(){
      console.log("Yra dar Klases Restriction");
    }
  };

});/* End of app.directive */  


/*
restrict: "A" - Works by atribute: <div restriction-example-bar>...</div>
restrict: "E" - Works by element: <restriction-example-bar>...</restriction-example-bar>
restrict: "C" - Works by class: <div class="restriction-example-bar">...</div>
restrict: "M" - Works by comment: <!--directive: restriction-example-bar -->
*/