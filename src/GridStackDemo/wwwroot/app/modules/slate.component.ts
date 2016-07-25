/// <reference path="../../../typings/index.d.ts" />

import {names} from '../angular.global';
angular.module(names.Modules.components, []);
// After the angular module has been registered
//Then I will load in the component that register it. 
import * as loadOpenedClaimsComponent from '../components/openclaims/openedClaims.component';
var loadNow = loadOpenedClaimsComponent;