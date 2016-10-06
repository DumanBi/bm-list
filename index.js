(function() {
  'use strict';

  angular
    .module('soc-faf-bmList', []);

  angular
    .module('soc-faf-bmList')
    .directive('bmList', bmList);

  function bmList() {
    var directive = {
      restrict: 'E',
      templateUrl: 'list.directive.html',
      scope: {},
      controller: bmListCtrl,
      controllerAs: 'bm',
      bindToController: true
    };
    return directive;
  };

  bmListCtrl.$inject = ['AppModel', '$routeParams', '$location'];

  function bmListCtrl(AppModel, $routeParams, $location) {
    var bm = this;
    bm.remove = remove;
    bm.edit = edit;
    bm.currentPage = 1;
    bm.perPageCount = 5;

    bm.vm = AppModel.get('all');

    bm.filter = $routeParams.tag;

    function remove(id){
      AppModel.remove('list', id);
    };

    function edit(id){
      $location.path('/edit/' + id);
    };
  };

})();
