// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var meuApp = angular.module('Aula03', ['ionic', 'Aula03.controllers', 'Aula03.services', 'Aula03.filters']) //Esquecer de propósito dos filtros

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

meuApp.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom');

  //Usa os conceitos de rotas do angular
  $stateProvider

  .state('home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'views/tab-home.html'
      }
    }
  })

  .state('inserir', {
    url: '/inserir',
    views: {
      'tab-inserir': {
        templateUrl: 'views/tab-inserir.html',
        controller: 'InserirController'
      }
    }
  })

  .state('listar', {
    url: '/listar',
    views: {
      'tab-listar': {
        templateUrl: 'views/tab-listar.html',
        controller: 'ListarController'
      }
    }
  })

  .state('sobre', {
    url: '/sobre',
    views: {
      'tab-sobre': {
        templateUrl: 'views/tab-sobre.html'
      }
    }
  })

  .state('detalhes', {
      url: '/detalhe/:indice',
      views: {
        'tab-listar': {
          templateUrl: 'views/tab-detalhe.html',
          controller: 'DetalheController'
        }
      }
    });

  // Em caso de uma url desconhecida, redireciona para a home
  $urlRouterProvider.otherwise('/home');

});

