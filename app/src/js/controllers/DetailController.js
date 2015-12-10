angular.module('resthitter')
.controller('DetailController', ['People', '$routeParams', function(People, $routeParams){
  var dc = this;
  //dc.person = {id: 1, name: "Placeholder", twitter: "@placeholder"};
  // $routeParams.id
  dc.person = People.get({id: $routeParams.id});
  // GET localhost:7000/people/1

  dc.save = function(){
    //People.save({}, dc.person, function(){});
    dc.person.$save().then(function(){
      console.log("success");
    });
    // POST .../people
  };

}]);
