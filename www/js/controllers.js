var meusControllers = angular.module('Aula03.controllers', []);

meusControllers.controller('InserirController', function ($scope, Usuarios) {
  
  $scope.Usuario = {};
  //$scope.Usuario.site = 'http://www.helpper.com.br';

  $scope.salvar = function (valido, Usuario){
 	
    //Validou?
    if (valido) {
      
      //Busca os dados da base
     /* var dados = localStorage.getItem('dados');

      //Verifica se existem dados
      if(!dados)
        dados = [];
      else
        dados = JSON.parse(dados);

      //Alimenta o banco
      var indice = dados.length;
      dados[indice] = Usuario;

      //Armazena e seta o sucesso
      localStorage.setItem('dados', JSON.stringify(dados));*/
      $scope.sucesso = true;
      Usuarios.salvar(Usuario);

    } 
  }

  $scope.reset = function(frmUsuario, Usuario) {
    $scope.Usuario = {};
    frmUsuario.$setPristine(); //Seta o formulário ao seu estado primitivo
    $scope.sucesso = false;
  }

});

meusControllers.controller('ListarController', function ($scope, Usuarios) {

  $scope.atualizar = function() {
    $scope.dados = Usuarios.todos();
    $scope.$broadcast('scroll.refreshComplete'); //Avisa que terminou de atualizar
  }

  //Chama o atualizar
  $scope.atualizar();

  $scope.exibindoDelete = false;

  $scope.apagar = function(i) {
    //Depois de mostrar que o apagar não resolveu nada, use a função
    //Usuarios.apagar(i);
    $scope.dados.splice(i, 1);

  }

  $scope.site = function(site){
    window.open(site);
  }

});

meusControllers.controller('DetalheController', function ($scope, $stateParams, Usuarios) {
  
  $scope.Usuario = Usuarios.buscar($stateParams.indice);

});