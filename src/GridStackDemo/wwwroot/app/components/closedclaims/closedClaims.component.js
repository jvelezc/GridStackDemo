"use strict";
/// <reference path="../../../../typings/index.d.ts" />
const angular_global_1 = require('../../angular.global');
angular
    .module(angular_global_1.names.Modules.components)
    .component(angular_global_1.names.Components.closedClaimsPanel, {
    template: [`
              <div class="ibox float-e-margins" id="ClosedPanelInstance">
                <div class="ibox-title">
                   <span class="label label-success pull-right">Wednesday</span>
                   <h5>Closed Claims</h5>
                </div>
             <div class="ibox-content">
                 <h1 class="no-margins"><span>2</span></h1>
                 <div class="stat-percent font-bold text-success"><span >20</span>%<i class="fa fa-bolt"></i></div>
                 <small>Since last Week: </small>
              </div>
            </div>
            `].join('')
});