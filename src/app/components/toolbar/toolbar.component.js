(function () {
  'use strict';

  angular
  .module('app')
  .component('myToolbar', {
    templateUrl: 'app/components/toolbar/toolbar.html',
    controller: toolbarCtrl,
    controllerAs: 'vm'
  });

  toolbarCtrl.$inject = ['CredentialsService', '$rootScope', '$state'];

  function toolbarCtrl(CredentialsService, $rootScope, $state) {
    var vm = this;

    vm.isLogged = CredentialsService.isLogged();

    vm.logout = function () {
      CredentialsService.clearCredentials();
      vm.isLogged = false;
      $state.go('login');
    }

    $rootScope.$on('isLogin', function () {
      vm.isLogged = true;
    })
  }
})();
