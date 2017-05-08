var app = angular.module("app", []);
 
app.controller("cdController", function($scope) {

	$scope.showNew = false;

    var discos = [
        {'id': '1', 'titulo': 'Titulo 1', 'artista': 'Artista 1', 'precio': '124.352'},
        {'id': '2', 'titulo': 'Titulo 2', 'artista': 'Artista 2', 'precio': '94.3534'},
        {'id': '3', 'titulo': 'Titulo 3', 'artista': 'Artista 3', 'precio': '231.2432'}
    ];

    $scope.discos = discos;


    $scope.detalle = function(){
            $scope.showNew = true;
    }

    $scope.cancel = function(){
            $scope.showNew = false;
    }

    $scope.add = function(x){
            var total =  $scope.discos.length+1;
            $scope.discos.splice(total,0,{'id': ''+total+'', 'titulo': ''+$scope.cd.titulo+'', 'artista': ''+$scope.cd.artista+'', 'precio': ''+$scope.cd.precio+''});
            
    }

    $scope.delete = function(x){
            $scope.discos.splice(x-1,1);
        
    }

});