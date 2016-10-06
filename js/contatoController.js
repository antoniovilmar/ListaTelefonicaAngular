angular.module("ListaTelefonica").controller("ListaTelefonicaController", function($scope) {

    $scope.mensagem = "Lista Telefônica";

    $scope.contatos = [{
        nome: "MeuTelefone",
        telefone: "33183079",
        categoria: {
            nome: "Amigo",
            classificacao: "Favorito"
        }
    }, {
        nome: "Avee",
        telefone: "12312313",
        categoria: {
            nome: "Conhecido",
            classificacao: "Outros"
        }
    }];

    $scope.categorias = [{
            codigo: 1,
            nome: "Amigo",
            classificacao: "Favorito"
        }, {
            codigo: 2,
            nome: "Conhecido",
            classificacao: "Outros"
        }, {
            codigo: 3,
            nome: "Trabalho",
            classificacao: "DBServer"
        }, {
            codigo: 4,
            nome: "Meu Número",
            classificacao: "Favorito"
        }

    ];

    $scope.salvar = function(contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    }

    $scope.excluir = function(contatos) {
        $scope.contatos = contatos.filter(function(contato) {
            if (!contato.selecionado) {
                return contato;

            }
        });
    }
    $scope.isSelecionados = function(contatos) {
        return contatos.some(function(contato) {
            if (contato.selecionado) {
                return contato;

            }
        });
    }

    $scope.ordenarPor = function(campo) {
        $scope.criterioOrdenacaoContatos = campo;
        $scope.direcaoOrdenacaoContatos = !$scope.direcaoOrdenacaoContatos;
    }


});
