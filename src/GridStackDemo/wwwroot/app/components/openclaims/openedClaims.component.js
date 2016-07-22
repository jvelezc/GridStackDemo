"use strict";
/// <reference path="../../../../typings/index.d.ts" />
const angular_global_1 = require('../../angular.global');
angular
    .module(angular_global_1.names.Modules.components)
    .component(angular_global_1.names.Components.openClaimsPanel, {
    bindings: {
        openClaims: "<",
        openClaimsPercentage: "<" //translate to open-claims-percentage attribute
    },
    template: [`
              <div class="ibox float-e-margins" id="addReOpenedPanel">
                <div class="ibox-title">
                   <span class="label label-success pull-right">Wednesday</span>
                   <h5>Open Claims</h5>
                </div>
             <div class="ibox-content">
                 <h1 class="no-margins"><span id="vrxReopenedClaims">{{$ctrl.openClaims}}</span></h1>
                 <div class="stat-percent font-bold text-success"><span >{{$ctrl.openClaimsPercentage}}</span>%<i class="fa fa-bolt"></i></div>
                 <small>Since last Week: </small>
              </div>
            </div>
            `].join('')
});
