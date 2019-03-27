(function() {

  angular.module('myApp')
  .controller('NoticiasController', ['$scope', '$state', 'NoticiasService', function($scope, $state, NoticiasService) {
    $scope.getNoticias = () => {
      return NoticiasService.getNoticias();
    }
    $scope.noticia = {}
    $scope.onChange = function(noticia){
    	NoticiasService.criarNoticia(noticia)
    	$scope.noticia = {}
    }
    $scope.editar = function(id){
    	$state.go("noticia.edit", {id: id})

    }
    $scope.podeEditar = function(noticia) {
    	console.log('localStorage.getItem("username") : ',localStorage.getItem("username") )
    	console.log('autor: ',noticia)
    	if(noticia && localStorage.getItem("username") ) {
    	return localStorage.getItem("username") == "ceo" || localStorage.getItem("username") == noticia.autor;
    }
    return true;
    }
    //$scope.possoEditar = localStorage.getItem("username") == "ceo" || localStorage.getItem("username") == noticia.autor
    $scope.deletar = function(noticia){
    	console.log('blalbl')
    	NoticiasService.deletarNoticia(noticia)
    	$state.go("home")
    }
  }]);
})();
