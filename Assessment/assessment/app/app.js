(function() {

  angular.module('myApp', ['ui.router', 'ui.bootstrap','ngResource'])
  .factory('Interceptor', function Interceptor() {
    return {
      request: function(config) {
	config.headers.Authorization = localStorage.getItem('token');
        //console.log('request interceptor', config);
        return config;
      },
      requestError: function(config) {
      	//console.log('requestError interceptor', config);
        return config;
      },
      response: function(response) {
      	console.log('response interceptor', response);
        return response;
      },
      responseError: function(response) {
        console.log('responseError interceptor', response);
        if(response.status == 401) {
          alert("Não Autorizado!")
        }
        return response;
      }
    }
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('Interceptor');
  })
  .config(($stateProvider, $urlRouterProvider) => {
         $urlRouterProvider.otherwise('/');
         $stateProvider
         .state({
            name: 'home',
            url: '/',
            templateUrl: 'app/components/noticias/noticias.html'
          })
          .state('login', {
              url: '/login',
              templateUrl: 'app/components/login/login.html',
           })
          .state('noticia', {
              url: '/noticia',
              template: '<ui-view></ui-view>',
           })
          .state('noticia.edit', {
              url: '/noticia/:id',
              templateUrl: 'app/components/noticias/noticiasedit.html',
           });
  });
})();
 
