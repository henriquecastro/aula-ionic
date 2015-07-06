var meusFiltros = angular.module('Aula03.filters', []);

meusFiltros.filter('linkBlank', function() {
  return function(input) {
    return '<a href="'+input+'" target="_blank">'+input+'</a>';
  };
});