﻿/// <reference path="../../../../typings/index.d.ts" />
import {names} from '../../angular.global';
angular
    .module(names.Modules.components)
    //<opened-Claims-Panel></open-Claims-Panel>
    .component(names.Components.openClaimsPanel, {

        bindings: {
            openClaims: "<", //translate to open-claims attribute
            openClaimsPercentage: "<" //translate to open-claims-percentage attribute
        },
        template: [`
              <div class="ibox float-e-margins" id="OpenedPanelInstance">
                <div class="ibox-title">
                   <span class="label label-success pull-right">Wednesday</span>
                   <h5>Open Claims</h5>
                </div>
             <div class="ibox-content">
                 <h1 class="no-margins"><span>{{$ctrl.openClaims}}</span></h1>
                 <div class="stat-percent font-bold text-success"><span >{{$ctrl.openClaimsPercentage}}</span>%<i class="fa fa-bolt"></i></div>
                 <small>Since last Week: </small>
              </div>
            </div>
            `].join('')

    });

