angular.module('resthitter')
.controller('DetailController', ['People', '$routeParams', function(People, $routeParams){
  var dc = this;
  //dc.person = {id: 1, name: "Placeholder", twitter: "@placeholder"};
  // $routeParams.id
  dc.person = People.get({id: $routeParams.id});
  // GET localhost:7000/people/1

}]);
