"use strict";
/// <reference path="../../../typings/index.d.ts" />
var angular_global_1 = require('../angular.global');
var reopenedclaims_component_1 = require('../components/reopenedclaims/reopenedclaims.component');
var transferredclaims_component_1 = require("../components/transferredclaims/transferredclaims.component");
var closedclaims_component_1 = require("../components/closedclaims/closedclaims.component");
var assignedclaims_component_1 = require("../components/assigned/assignedclaims.component");
var flaggedclaims_component_1 = require("../components/flaggedclaims/flaggedclaims.component");
var openclaimsgrid_component_1 = require("../components/openclaimsgrid/openclaimsgrid.component");
var activitygrid_component_1 = require("../components/activityGrid/activitygrid.component");
var dashboardconfig_component_1 = require("../components/dashboardconfig/dashboardconfig.component");
var kendolinechart_component_1 = require("../components/kendolinechart/kendolinechart.component");
var kendogauge_component_1 = require("../components/kendogauge/kendogauge.component");
var filtertimeline_component_1 = require("../components/filtertimeline/filtertimeline.component");
var claimprogress_component_1 = require("../components/claimsprogress/claimprogress.component");
var serverstatus_component_1 = require("../components/serverstatus/serverstatus.component");
var operationhours_component_1 = require("../components/operationhours/operationhours.component");
var systeminfo_component_1 = require("../components/systeminfo/systeminfo.component");
var holidaydates_component_1 = require("../components/holidaydates/holidaydates.component");
var postage_component_1 = require("../components/postage/postage.component");
var ropsettings_component_1 = require("../components/ropsettings/ropsettings.component");
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
    .component(angular_global_1.names.Components.ropSettings, new ropsettings_component_1.ROPSettingsComponent());
