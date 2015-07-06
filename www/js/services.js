var meuServico = angular.module('Aula03.services', []);

meuServico.factory('Usuarios', function() {

  //Busca os dados da base
  var usuarios = localStorage.getItem('dados');

  //Verifica se existem dados
  if(!usuarios)
    usuarios = [];
  else
    usuarios = JSON.parse(usuarios);

  return {
    todos: function() {
      return usuarios;
    },
    salvar: function(Usuario){

      //Alimenta o banco
      var indice = usuarios.length;
      usuarios[indice] = Usuario;
      localStorage.setItem('dados', JSON.stringify(usuarios));

    },
    apagar: function(index) {
      usuarios.splice(index, 1);
      localStorage.setItem('dados', JSON.stringify(usuarios));
    },
    buscar: function(index) {
      return usuarios[index];
      /*for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;*/
    }
  };
});
