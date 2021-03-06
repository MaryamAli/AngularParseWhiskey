let AddController = function ($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/whiskey';
  let Whiskey = function (obj) {
    this.name = obj.name;
    this.maker = obj.maker;
    this.hasTried = false;
  }
  $scope.addWhiskey =(obj) => {
    let w =  new Whiskey(obj);

    $http.post(url, w, PARSE.CONFIG).then( (res) => {
      $scope.whiskey ={};

    });
  };
};

AddController.$inject = ['$scope', '$http', 'PARSE'];

export default AddController;