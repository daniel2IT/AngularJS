# Date binding
How can controllers communicate with each other?
In this tutorial, i'll take a look at what factories are and how
to store data with them and 
transfer them between AngularJS controllers.

Kartais reikalaujama kai mes darome tam tikra aplikacija,
kad kai kurie panasus duomenys, turetu tokias pat reiksmes.

Как контроллеры могут обмениваться данными между собой?
В этом я разобрал что такое фабрики и как 
с их помощью хранить данные и передавать их между контроллерами
AngularJS.

# General


 ```html
ng-controller='firstController'
ng-controller='secondController' <!--Kiekvienas kontroleris atskirai uzvadintas-->

<input type='text' ng-model='myFactoryFirst.helloImFactory'>
<input type='text' ng-model='myFactoryFirst.helloImFactory'>  <!--Kaip matome vienas tas pats inputas, su tokiu paciu MyFactoryFirst ir iskviecianciu metodu helloImFactory, leido panaudoti mum ta sinchronu, pakeitima -->
```

 ```javascript
app.controller('firstController', function($scope, myFactory)  /* Reikejo dadeti ta myFactory kaip atskira tokia klase, kad buvo inicializuota, matomam, tane kontrolerije */

$scope.myFactoryFirst = myFactory;  /*myFactoryFirst  - bet kaip galejo buti uzvadinta, toliau bus naudojama Sablone.. $scope visada naudojamas, kad butu butent MATOMA musu sablone ... bei = myFactory , tiesiog paina ja, kuri buvo aprasyta virs    */
```
![Test Image 3](img/1.png)

