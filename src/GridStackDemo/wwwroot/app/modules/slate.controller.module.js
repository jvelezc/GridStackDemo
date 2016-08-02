System.register(["angular", '../angular.global', '../dashboard/DashboardAngular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular, angular_global_1, DashboardAngular_1;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (angular_global_1_1) {
                angular_global_1 = angular_global_1_1;
            },
            function (DashboardAngular_1_1) {
                DashboardAngular_1 = DashboardAngular_1_1;
            }],
        execute: function() {
            angular
                .module(angular_global_1.names.Modules.slateControllers, [])
                .controller(angular_global_1.names.Controllers.dashBoardAngular, DashboardAngular_1.DashboardAngular);
        }
    }
});
