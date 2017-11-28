(function () {
  'use strict';

  angular
  .module('app')
  .component('noticias', {
    templateUrl: 'app/components/noticias/noticias.html',
    controller: noticiasCtrl,
    controllerAs: 'vm'
  });

  noticiasCtrl.$inject = ['NoticiasService'];

  function noticiasCtrl(NoticiasService) {
    var vm = this;

    vm.noticias = [];

    NoticiasService.query().$promise.then(function (data) {
      vm.noticias = data;
    });
  }
})();
