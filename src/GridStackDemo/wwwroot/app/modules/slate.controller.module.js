'use strict';
var angular_global_1 = require('../angular.global');
var DashboardAngular_1 = require('../dashboard/DashboardAngular');
angular
    .module(angular_global_1.names.Modules.slateControllers, [])
    .controller("Test", DashboardAngular_1.DashboardAngular);
