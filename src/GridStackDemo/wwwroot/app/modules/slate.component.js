/// <reference path="../../../typings/index.d.ts" />
"use strict";
const angular_global_1 = require('../angular.global');
angular.module(angular_global_1.names.Modules.components, []);
// After the angular module has been registered
//Then I will load in the component that register it. 
const loadOpenedClaimsComponent = require('../components/openclaims/openedClaims.component');
const loadReOpenedClaimsComponent = require('../components/reopenedclaims/reOpenedClaims.component');
var loadOpenedClaimsComponentNow = loadOpenedClaimsComponent;
var loadReOpenedClaimsComponentNow = loadReOpenedClaimsComponent;
