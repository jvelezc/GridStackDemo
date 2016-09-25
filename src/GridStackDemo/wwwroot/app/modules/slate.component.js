System.register(['../angular.global', '../components/reopenedclaims/reopenedclaims.component', "../components/transferredclaims/transferredclaims.component", "../components/closedclaims/closedclaims.component", "../components/assigned/assignedclaims.component", "../components/flaggedclaims/flaggedclaims.component", "../components/openclaimsgrid/openclaimsgrid.component", "../components/activityGrid/activitygrid.component", "../components/dashboardconfig/dashboardconfig.component", "../components/kendolinechart/kendolinechart.component", "../components/kendogauge/kendogauge.component", "../components/filtertimeline/filtertimeline.component", "../components/claimsprogress/claimprogress.component", "../components/serverstatus/serverstatus.component", "../components/operationhours/operationhours.component", "../components/systeminfo/systeminfo.component", "../components/holidaydates/holidaydates.component", "../components/postage/postage.component", "../components/ropsettings/ropsettings.component", "../components/claimsDepartmentSettings/claimsDepartmentSettings.component", "../components/fnol/fnol.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_global_1, reopenedclaims_component_1, transferredclaims_component_1, closedclaims_component_1, assignedclaims_component_1, flaggedclaims_component_1, openclaimsgrid_component_1, activitygrid_component_1, dashboardconfig_component_1, kendolinechart_component_1, kendogauge_component_1, filtertimeline_component_1, claimprogress_component_1, serverstatus_component_1, operationhours_component_1, systeminfo_component_1, holidaydates_component_1, postage_component_1, ropsettings_component_1, claimsDepartmentSettings_component_1, fnol_component_1;
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
            function (assignedclaims_component_1_1) {
                assignedclaims_component_1 = assignedclaims_component_1_1;
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
            },
            function (kendolinechart_component_1_1) {
                kendolinechart_component_1 = kendolinechart_component_1_1;
            },
            function (kendogauge_component_1_1) {
                kendogauge_component_1 = kendogauge_component_1_1;
            },
            function (filtertimeline_component_1_1) {
                filtertimeline_component_1 = filtertimeline_component_1_1;
            },
            function (claimprogress_component_1_1) {
                claimprogress_component_1 = claimprogress_component_1_1;
            },
            function (serverstatus_component_1_1) {
                serverstatus_component_1 = serverstatus_component_1_1;
            },
            function (operationhours_component_1_1) {
                operationhours_component_1 = operationhours_component_1_1;
            },
            function (systeminfo_component_1_1) {
                systeminfo_component_1 = systeminfo_component_1_1;
            },
            function (holidaydates_component_1_1) {
                holidaydates_component_1 = holidaydates_component_1_1;
            },
            function (postage_component_1_1) {
                postage_component_1 = postage_component_1_1;
            },
            function (ropsettings_component_1_1) {
                ropsettings_component_1 = ropsettings_component_1_1;
            },
            function (claimsDepartmentSettings_component_1_1) {
                claimsDepartmentSettings_component_1 = claimsDepartmentSettings_component_1_1;
            },
            function (fnol_component_1_1) {
                fnol_component_1 = fnol_component_1_1;
            }],
        execute: function() {
            angular.module(angular_global_1.names.Modules.components, []);
            angular
                .module(angular_global_1.names.Modules.components)
                .component(angular_global_1.names.Components.reOpenedClaimsPanel, new reopenedclaims_component_1.ReOpenedClaimsComponent())
                .component(angular_global_1.names.Components.openClaimsPanel, new reopenedclaims_component_1.ReOpenedClaimsComponent())
                .component(angular_global_1.names.Components.transferredClaimsPanel, new transferredclaims_component_1.TransferredClaimsComponent())
                .component(angular_global_1.names.Components.closedClaimsPanel, new closedclaims_component_1.ClosedClaimsComponent())
                .component(angular_global_1.names.Components.assignedClaimsPanel, new assignedclaims_component_1.AssignedClaimsComponent())
                .component(angular_global_1.names.Components.flaggedClaimsPanel, new flaggedclaims_component_1.FlaggedClaimsComponent())
                .component(angular_global_1.names.Components.openClaimsGrid, new openclaimsgrid_component_1.OpenClaimsGridComponent())
                .component(angular_global_1.names.Components.activityGrid, new activitygrid_component_1.ActivityGridComponent())
                .component(angular_global_1.names.Components.dashboardConfig, new dashboardconfig_component_1.DashboardConfigComponent())
                .component(angular_global_1.names.Components.kendoLineChart, new kendolinechart_component_1.KendoLineChartComponentComponent())
                .component(angular_global_1.names.Components.kendoGauge, new kendogauge_component_1.KendoGaugeComponent())
                .component(angular_global_1.names.Components.filterTimeline, new filtertimeline_component_1.FilterTimelineComponent())
                .component(angular_global_1.names.Components.claimsProgressBar, new claimprogress_component_1.ClaimProgressComponent())
                .component(angular_global_1.names.Components.serverStatus, new serverstatus_component_1.ServerStatusComponent())
                .component(angular_global_1.names.Components.systemInfo, new systeminfo_component_1.SystemInfoComponent())
                .component(angular_global_1.names.Components.operationHours, new operationhours_component_1.OperationHoursComponent())
                .component(angular_global_1.names.Components.holidayDates, new holidaydates_component_1.HolidayDatesComponent())
                .component(angular_global_1.names.Components.postage, new postage_component_1.PostageComponent())
                .component(angular_global_1.names.Components.ropSettings, new ropsettings_component_1.ROPSettingsComponent())
                .component(angular_global_1.names.Components.claimsDepartmentSettings, new claimsDepartmentSettings_component_1.ClaimsDepartmentSettingsComponent())
                .component(angular_global_1.names.Components.fnol, new fnol_component_1.FnolComponent());
        }
    }
});
