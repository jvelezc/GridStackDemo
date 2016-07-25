/// <reference path="../../../typings/index.d.ts" />

import {names} from '../angular.global';
angular.module(names.Modules.components, []);
// After the angular module has been registered
//Then I will load in the component that register it. 
import * as loadOpenedClaimsComponent from '../components/openclaims/openedClaims.component';
import * as loadReOpenedClaimsComponent from '../components/reopenedclaims/reOpenedClaims.component';
import * as loadClosedClaimsComponent from '../components/closedclaims/closedClaims.component';

var loadOpenedClaimsComponentNow = loadOpenedClaimsComponent;
var loadReOpenedClaimsComponentNow = loadReOpenedClaimsComponent;
var loadClosedClaimsComponentNow = loadClosedClaimsComponent;