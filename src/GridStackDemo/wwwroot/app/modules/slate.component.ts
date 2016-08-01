/// <reference path="../../../typings/index.d.ts" />
import {names} from '../angular.global';
import {ReOpenedClaimsComponent} from '../components/reopenedclaims/reopenedclaims.component';
import {OpenedClaimsComponent} from '../components/openclaims/openedclaims.component';
import {TransferredClaimsComponent} from "../components/transferredclaims/transferredclaims.component";
import {ClosedClaimsComponent} from "../components/closedclaims/closedclaims.component";
import {AssignedClaimsComponent} from "../components/assigned/assignedclaims.component";
import {FlaggedClaimsComponent} from "../components/flaggedclaims/flaggedclaims.component";
import {OpenClaimsGridComponent} from "../components/openclaimsgrid/openclaimsgrid.component";
import {ActivityGridComponent} from "../components/activityGrid/activitygrid.component";
import {DashboardConfigComponent} from "../components/dashboardconfig/dashboardconfig.component";
import {KendoLineChartComponentComponent} from "../components/kendolinechart/kendolinechart.component";
import {KendoGaugeComponent} from "../components/kendogauge/kendogauge.component";
angular.module(names.Modules.components, []);

angular
    .module(names.Modules.components)
    //<re-opened-claims-panel></re-opened-claims-panel>
    .component(names.Components.reOpenedClaimsPanel, new ReOpenedClaimsComponent())
    //<open-claims-panel key=primarykey >
    .component(names.Components.openClaimsPanel, new ReOpenedClaimsComponent())
    //<transferred-claims-panel key=primarykey></<transferred-claims-panel>
    .component(names.Components.transferredClaimsPanel, new TransferredClaimsComponent())
    //<closed-claims-panel key=primarykey ></closed-claims-panel>
    .component(names.Components.closedClaimsPanel, new ClosedClaimsComponent())
    //<assigned-claims-panel key=primarykey> </assigned-claims-panel>
    .component(names.Components.assignedClaimsPanel, new ClosedClaimsComponent())
    //<flagged-claims-panel key=primarykey></flagged-claims-panel>
    .component(names.Components.flaggedClaimsPanel, new FlaggedClaimsComponent())
    //<open-claims-grid key=primarykey></open-claims-grid>
    .component(names.Components.openClaimsGrid, new OpenClaimsGridComponent())
     //<activity-grid key=primarykey></activity-grid>
    .component(names.Components.activityGrid, new ActivityGridComponent())
    //<dashboard-config key=primarykey></dashboard-config>
    .component(names.Components.dashboardConfig, new DashboardConfigComponent())
    //<kendo-line-chart key=primarykey></kendo-line-chart> </kendo-line-chart>
    .component(names.Components.kendoLineChart, new KendoLineChartComponentComponent())
    //<kendo-gauge key="primarykey"</kendo-gauge/>
    .component(names.Components.kendoGauge, new KendoGaugeComponent())
    ;
  