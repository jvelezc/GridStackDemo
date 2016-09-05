"use strict";
var angular = require("angular");
var angular_global_1 = require('../angular.global');
var DashboardAngular_1 = require('../dashboard/DashboardAngular');
angular
    .module(angular_global_1.names.Modules.slateControllers, [])
    .controller(angular_global_1.names.Controllers.dashBoardAngular, DashboardAngular_1.DashboardAngular);
