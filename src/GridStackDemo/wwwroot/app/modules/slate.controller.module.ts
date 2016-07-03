'use strict';
import {names} from '../angular.global';
import {DashboardAngular} from '../dashboard/DashboardAngular';
angular
    .module(names.Modules.slateControllers, [])
    .controller(names.Controllers.dashBoardAngular, DashboardAngular);
