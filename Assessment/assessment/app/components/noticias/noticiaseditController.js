(function() {

  angular.module('myApp')
  .controller('Noticiaseditcontroller', ['$scope', '$state', '$stateParams', 'NoticiasService', function($scope, $state,$stateParams, NoticiasService) {
    $scope.getNoticias = () => {
      return NoticiasService.getNoticias();
    }
    $scope.noticia = NoticiasService.getbyid($stateParams.id);
    $scope.onChange = function(noticia){
    	NoticiasService.atualizarNoticia(noticia)
      $state.go("home")
    	
    }
  }]);
})();
