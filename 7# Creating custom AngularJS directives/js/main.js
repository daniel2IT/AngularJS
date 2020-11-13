/* inicijuojam app,
2 parametris tuscias masyvas 
cotroller(kontrolerio pavadinimas, funkcija kuri bus aprasyta)
$scope -(kaip parametras funkcijoje), kad galima butu kazka isvesti i ekrana
*/
var app = angular.module('app', []);

app.directive('div.element.for.js', function(){

/* scope - область видимости этой директивы 
element - tai yra elementas nustatytos direktivos 
attrs - set of attributes in our custom directive 
they  (should be the attributes of the element) 

Short Variantas 
return function(scope, element, attrs){
console.log("This is my short Directive");
}; /* End of Short variable */


/* Defaultinis variantas (Dazniausiai naudojamas) 
link - property, savyje turintis funkcija..
link - suveikia tik tada, kai div buvo atvaizduotas pusl. */
 return{
  link: function (scope,element, attrs){
    console.log("This is my long Directive");
    console.log("scope", scope);
    console.log("element", element);
    console.log("attrs", attrs);

/*   element.text("This is my magic directive"); 
Panaudojus tai, jisai visiskai pakeis musu direktiva i sita nurodyta..*/ 

    element.on('click', function(){
        console.log('click'); /* Po kliko daromas eventas */
    
        if(element.text() === "The test is ongoing")
        {
          element.text("Testing has been completed");
        }
        else{
          element.text("The test is ongoing")
        }
    });

  }

}; /* End of Short variable */


}); /* End of */