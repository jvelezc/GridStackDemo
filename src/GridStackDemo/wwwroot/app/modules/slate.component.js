System.register(['../angular.global', '../components/reopenedclaims/reopenedclaims.component', "../components/transferredclaims/transferredclaims.component", "../components/closedclaims/closedclaims.component", "../components/flaggedclaims/flaggedclaims.component", "../components/openclaimsgrid/openclaimsgrid.component", "../components/activityGrid/activitygrid.component", "../components/dashboardconfig/dashboardconfig.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_global_1, reopenedclaims_component_1, transferredclaims_component_1, closedclaims_component_1, flaggedclaims_component_1, openclaimsgrid_component_1, activitygrid_component_1, dashboardconfig_component_1;
    return {
        setters:[
            function (angular_global_1_1) {
                angular_global_1 = angular_global_1_1;
            },
            function (reopenedclaims_component_1_1) {
                reopenedclaims_component_1 = reopenedclaims_component_1_1;
            },
            function (transferredclaims_component_1_1) {
                transferredclaims_component_1 = transferredclaims_component_1_1;
            },
            function (closedclaims_component_1_1) {
                closedclaims_component_1 = closedclaims_component_1_1;
            },
            function (flaggedclaims_component_1_1) {
                flaggedclaims_component_1 = flaggedclaims_component_1_1;
            },
            function (openclaimsgrid_component_1_1) {
                openclaimsgrid_component_1 = openclaimsgrid_component_1_1;
            },
            function (activitygrid_component_1_1) {
                activitygrid_component_1 = activitygrid_component_1_1;
            },
            function (dashboardconfig_component_1_1) {
                dashboardconfig_component_1 = dashboardconfig_component_1_1;
            }],
        execute: function() {
            angular.module(angular_global_1.names.Modules.components, []);
            angular
                .module(angular_global_1.names.Modules.components)
                .component(angular_global_1.names.Components.reOpenedClaimsPanel, new reopenedclaims_component_1.ReOpenedClaimsComponent())
                .component(angular_global_1.names.Components.openClaimsPanel, new reopenedclaims_component_1.ReOpenedClaimsComponent())
                .component(angular_global_1.names.Components.transferredClaimsPanel, new transferredclaims_component_1.TransferredClaimsComponent())
                .component(angular_global_1.names.Components.closedClaimsPanel, new closedclaims_component_1.ClosedClaimsComponent())
                .component(angular_global_1.names.Components.assignedClaimsPanel, new closedclaims_component_1.ClosedClaimsComponent())
                .component(angular_global_1.names.Components.flaggedClaimsPanel, new flaggedclaims_component_1.FlaggedClaimsComponent())
                .component(angular_global_1.names.Components.openClaimsGrid, new openclaimsgrid_component_1.OpenClaimsGridComponent())
                .component(angular_global_1.names.Components.activityGrid, new activitygrid_component_1.ActivityGridComponent())
                .component(angular_global_1.names.Components.dashboardConfig, new dashboardconfig_component_1.DashboardConfigComponent());
        }
    }
});
