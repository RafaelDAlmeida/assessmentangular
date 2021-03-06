(function() {

  angular.module('myApp')
  .controller('LoginController', ['$scope', '$state', 'LoginService', function($scope, $state, LoginService) {
    $scope.logar = () => {
      LoginService.login($scope.login, $scope.senha).then((result) => {
        if(result) {
	        $state.go('home');
	         return;
	      }
      });
    };
    $scope.estaLogado =  function(){
     return localStorage.getItem('token')
    }
    $scope.logout =  function(){
     LoginService.logout()
    }
    
  }]);
})();
