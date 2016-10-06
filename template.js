angular.module('soc-faf-bmList').run(['$templateCache', function($templateCache) {$templateCache.put('list.directive.html','<md-content>\r\n  <h2 layout="row" layout-align="center center">\r\n    <div>\r\n      Filtered by Tag:\r\n      <span data-ng-show="bm.filter">\r\n        {{bm.filter}}\r\n      </span>\r\n      <span data-ng-hide="bm.filter">\r\n        None\r\n      </span> |\r\n      <a href="#/">Clear Filter</a>\r\n    </div>\r\n    <md-input-container class="perPage">\r\n      <label>Items per page</label>\r\n      <input type="number" min=\'5\' max=\'20\' data-ng-model="bm.perPageCount">\r\n    </md-input-container>\r\n  </h2>\r\n\r\n  <md-list class="change-height">\r\n    <md-list-item class="md-2-line"\r\n      dir-paginate="list in bm.vm.list | orderBy: \'-\' | filter:bm.filter | itemsPerPage: bm.perPageCount"\r\n      current-page="bm.currentPage"\r\n      pagination-id="tagsList">\r\n\r\n      <div class="md-list-item-text">\r\n        {{list.title}}\r\n        (<a href="{{list.url}}" target="_blank">{{list.url}}</a>) |\r\n        <md-chips class="custom-chips override" readonly="true" data-ng-model="list.tags">\r\n          <md-chip-template>\r\n            <span>{{$chip}}</span>\r\n          </md-chip-template>\r\n        </md-chips>\r\n      </div>\r\n\r\n      <md-button class="md-raised" data-ng-click="bm.edit(list.id)">\r\n        Edit\r\n      </md-button>\r\n      <md-button class="md-raised md-warn" data-ng-click="bm.remove(list.id)">\r\n        Delete\r\n      </md-button>\r\n      <md-divider ng-if="!$last"></md-divider>\r\n\r\n    </md-list-item>\r\n  </md-list>\r\n\r\n  <div layout="row" layout-align="center center">\r\n    <dir-pagination-controls max-size="5"\r\n      on-page-change="bm.goToPage(bm.currentPage)"\r\n      direction-links="true"\r\n      boundary-links="true"\r\n      pagination-id="tagsList">\r\n    </dir-pagination-controls>\r\n  </div>\r\n</md-content>\r\n');}]);