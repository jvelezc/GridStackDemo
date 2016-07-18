"use strict";
const angular = require("angular");
const angular_global_1 = require('../angular.global');
const DashboardAngular_1 = require('../dashboard/DashboardAngular');
angular
    .module(angular_global_1.names.Modules.slateControllers, [])
    .controller(angular_global_1.names.Controllers.dashBoardAngular, DashboardAngular_1.DashboardAngular);
